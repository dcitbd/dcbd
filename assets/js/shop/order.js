/**
 * Order Form Processing, Incomplete Order Tracker & Auto Calculation Engine
 */
const DCBD_Order = {
  incompleteTracked: false,

  initForm() {
    const form = document.getElementById("checkout-order-form");
    if (!form) return;

    this.renderOrderItems();
    this.bindCalculations();
    this.setupIncompleteTracker();

    form.addEventListener("submit", (e) => this.handleSubmit(e));
  },

  renderOrderItems() {
    const container = document.getElementById("order-products-summary");
    if (!container) return;

    const cart = DCBD_State.cart;
    if (cart.length === 0) {
      container.innerHTML = `<div class="text-danger p-3">কোনো পণ্য কার্টে নেই! অনুগ্রহ করে পণ্য নির্বাচন করুন।</div>`;
      return;
    }

    let html = "";
    cart.forEach(item => {
      const price = parseFloat(item.Selling_Price) || 0;
      const qty = item.quantity || 1;
      html += `
        <div class="flex justify-between items-center py-2" style="border-bottom:1px solid var(--border-color);">
          <div>
            <div style="font-weight:600; font-size:0.9rem;">${item.P_Name}</div>
            <div style="font-size:0.8rem; color:var(--text-muted);">পরিমাণ: ${qty} x ৳${price}</div>
          </div>
          <div style="font-weight:700; color:var(--primary);">৳${price * qty}</div>
        </div>
      `;
    });
    container.innerHTML = html;
  },

  calculateTotals() {
    let subtotal = 0;
    DCBD_State.cart.forEach(item => {
      subtotal += (parseFloat(item.Selling_Price) || 0) * (parseInt(item.quantity) || 1);
    });

    const deliveryArea = document.querySelector('input[name="delivery_area"]:checked')?.value || "dhaka";
    let deliveryCost = 90;
    if (deliveryArea === "cumilla") deliveryCost = 70;
    else if (deliveryArea === "outside") deliveryCost = 120;
    else if (deliveryArea === "pickup") deliveryCost = 0;

    // Auto-calculate offer: Free delivery if shopping > 2000 TK
    let deliveryDiscount = 0;
    if (subtotal >= DCBD_CONFIG.OFFERS.FREE_DELIVERY_THRESHOLD && deliveryCost > 0) {
      deliveryDiscount = deliveryCost;
      document.getElementById("free-delivery-badge")?.classList.remove("hidden");
    } else {
      document.getElementById("free-delivery-badge")?.classList.add("hidden");
    }

    // Auto-calculate offer: 5% online payment discount
    const paymentMethod = document.getElementById("payment_method")?.value || "COD";
    let onlineDiscount = 0;
    if (paymentMethod !== "Cash On Delivery (COD)") {
      onlineDiscount = Math.round(subtotal * 0.05);
      document.getElementById("online-discount-badge")?.classList.remove("hidden");
    } else {
      document.getElementById("online-discount-badge")?.classList.add("hidden");
    }

    const netDelivery = Math.max(0, deliveryCost - deliveryDiscount);
    const totalAmount = Math.max(0, subtotal + netDelivery - onlineDiscount);

    if (document.getElementById("summary-subtotal")) document.getElementById("summary-subtotal").textContent = `৳${subtotal}`;
    if (document.getElementById("summary-delivery")) document.getElementById("summary-delivery").textContent = `৳${netDelivery}`;
    if (document.getElementById("summary-discount")) document.getElementById("summary-discount").textContent = `-৳${onlineDiscount}`;
    if (document.getElementById("summary-total")) document.getElementById("summary-total").textContent = `৳${totalAmount}`;

    return { subtotal, deliveryCost: netDelivery, onlineDiscount, totalAmount };
  },

  bindCalculations() {
    document.querySelectorAll('input[name="delivery_area"]').forEach(r => {
      r.addEventListener("change", () => this.calculateTotals());
    });
    document.getElementById("payment_method")?.addEventListener("change", (e) => {
      this.calculateTotals();
      const isOnline = e.target.value !== "Cash On Delivery (COD)";
      const infoBox = document.getElementById("payment-account-info");
      if (infoBox) {
        infoBox.style.display = isOnline ? "block" : "none";
      }
    });
    this.calculateTotals();
  },

  setupIncompleteTracker() {
    const nameInput = document.getElementById("customer_name");
    const phoneInput = document.getElementById("customer_phone");

    const track = async () => {
      if (this.incompleteTracked) return;
      const name = nameInput?.value.trim();
      const phone = phoneInput?.value.trim();

      if (name && phone && phone.length >= 11) {
        this.incompleteTracked = true;
        const productsStr = DCBD_State.cart.map(i => `${i.P_Name} (${i.quantity}pcs)`).join(", ");
        const totals = this.calculateTotals();

        const incompleteData = {
          date: new Date().toLocaleString(),
          orderId: "DCBD-INC-" + Math.floor(1000 + Math.random() * 9000),
          accountType: DCBD_State.getAccountType(),
          customerName: name,
          phone: phone,
          address: document.getElementById("customer_address")?.value || "Not specified",
          products: productsStr,
          totalAmount: totals.totalAmount,
          status: "Incomplete"
        };

        try {
          await DCBD_Api.post("saveIncompleteOrder", incompleteData);
        } catch (e) {
          console.warn("Incomplete order tracked locally");
        }
      }
    };

    nameInput?.addEventListener("blur", track);
    phoneInput?.addEventListener("blur", track);
  },

  async handleSubmit(e) {
    e.preventDefault();

    if (DCBD_State.cart.length === 0) {
      DCBD_Toast.error("ত্রুটি", "আপনার কার্টে কোনো পণ্য নেই!");
      return;
    }

    const name = document.getElementById("customer_name").value.trim();
    const phone = document.getElementById("customer_phone").value.trim();
    const address = document.getElementById("customer_address").value.trim();
    const paymentMethod = document.getElementById("payment_method").value;
    const trxId = document.getElementById("transaction_id")?.value.trim() || "";

    if (!name || !phone || !address) {
      DCBD_Toast.error("ত্রুটি", "দয়া করে সকল প্রয়োজনীয় তথ্য পূরণ করুন!");
      return;
    }

    if (!DCBD_Validators.isBDPhone(phone)) {
      DCBD_Toast.warning("সতর্কতা", "দয়া করে সঠিক বাংলাদেশি মোবাইল নম্বর দিন (যেমন: 017xxxxxxxx)");
      return;
    }

    const totals = this.calculateTotals();
    const orderId = "DCBD-" + Math.floor(100000 + Math.random() * 900000);
    const productsStr = DCBD_State.cart.map(i => `${i.P_Name} (Qty: ${i.quantity})`).join(", ");

    const orderPayload = {
      Date: new Date().toLocaleString(),
      OrderID: orderId,
      Account_type: DCBD_State.getAccountType(),
      Customer_Name: name,
      Phone: phone,
      Address: address,
      Products: productsStr,
      Color: DCBD_State.cart[0]?.Color || "",
      Size: DCBD_State.cart[0]?.Size || "",
      Quantity: DCBD_State.cart.reduce((sum, i) => sum + i.quantity, 0),
      Total_Amount: totals.totalAmount,
      Payment_method: paymentMethod,
      Transaction_ID: trxId,
      Payment_Status: paymentMethod === "Cash On Delivery (COD)" ? "COD" : (trxId ? "Paid" : "Payment Pending"),
      Order_Status: "Order Placed",
      Reseller_Commission: 0,
      Commission_Status: "Pending"
    };

    DCBD_Toast.info("প্রসেসিং", "আপনার অর্ডারটি সাবমিট করা হচ্ছে...");

    try {
      const res = await DCBD_Api.post("placeOrder", orderPayload);
      // Clear cart
      DCBD_State.cart = [];
      DCBD_Storage.set(DCBD_CONFIG.STORAGE_KEYS.CART, []);
      DCBD_ProductCard.updateCounters();

      // Save latest order to session for success page
      sessionStorage.setItem("dcbd_latest_order", JSON.stringify(orderPayload));

      window.location.href = `/order-success.html?orderId=${orderId}`;
    } catch (err) {
      console.error("Order error:", err);
      DCBD_Toast.error("ত্রুটি", "অর্ডার সাবমিট করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    }
  }
};
