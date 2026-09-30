/**
 * Shopping Cart Logic
 */
const DCBD_Cart = {
  render(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const cart = DCBD_State.cart;
    if (cart.length === 0) {
      container.innerHTML = `
        <div class="text-center py-5">
          <i class="fas fa-shopping-cart fa-4x text-muted mb-3"></i>
          <h3>আপনার কার্টটি সম্পূর্ণ খালি!</h3>
          <p class="text-muted mb-4">পছন্দের পণ্যটি নির্বাচন করে কার্টে যোগ করুন।</p>
          <a href="/products.html" class="btn btn-primary"><i class="fas fa-shopping-bag"></i> শপিং শুরু করুন</a>
        </div>
      `;
      return;
    }

    let subtotal = 0;
    let itemsHTML = "";

    cart.forEach((item, index) => {
      const price = parseFloat(item.Selling_Price) || 0;
      const qty = parseInt(item.quantity) || 1;
      const lineTotal = price * qty;
      subtotal += lineTotal;
      const img = (item.Images && item.Images.split(",")[0]) || "https://placehold.co/100x100";

      itemsHTML += `
        <tr>
          <td>
            <div class="flex items-center gap-3">
              <img src="${img}" alt="${item.P_Name}" style="width:60px; height:60px; object-fit:cover; border-radius:var(--radius-sm);">
              <div>
                <a href="/product-details.html?sku=${item.SKU}" style="font-weight:600; color:var(--text-primary);">${item.P_Name}</a>
                <div style="font-size:0.8rem; color:var(--text-muted);">SKU: ${item.SKU}</div>
              </div>
            </div>
          </td>
          <td>৳${price}</td>
          <td>
            <div class="flex items-center gap-2">
              <button class="btn btn-sm btn-outline" onclick="DCBD_Cart.updateQty(${index}, -1)">-</button>
              <span style="font-weight:700; min-width:24px; text-align:center;">${qty}</span>
              <button class="btn btn-sm btn-outline" onclick="DCBD_Cart.updateQty(${index}, 1)">+</button>
            </div>
          </td>
          <td style="font-weight:700; color:var(--primary);">৳${lineTotal}</td>
          <td>
            <button class="btn btn-sm btn-outline" style="color:var(--danger); border-color:var(--danger);" onclick="DCBD_Cart.remove(${index})">
              <i class="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      `;
    });

    container.innerHTML = `
      <div class="grid grid-cols-3 gap-4">
        <div style="grid-column: span 2;">
          <div class="table-wrapper">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>${itemsHTML}</tbody>
            </table>
          </div>
        </div>

        <div>
          <div class="counter-card flex-col items-start gap-3 p-4" style="background:var(--bg-surface);">
            <h3 style="font-size:1.25rem; font-weight:700; color:var(--text-primary); border-bottom:1px solid var(--border-color); width:100%; padding-bottom:10px;">অর্ডার সামারি</h3>
            <div class="flex justify-between w-full">
              <span>সাবটোটাল:</span>
              <strong>৳${subtotal}</strong>
            </div>
            <div class="flex justify-between w-full" style="font-size:0.9rem; color:var(--text-secondary);">
              <span>ডেলিভারি চার্জ:</span>
              <span>চেকআউট পেজে নির্ধারিত হবে</span>
            </div>
            <hr style="width:100%; border:none; border-top:1px solid var(--border-color);">
            <div class="flex justify-between w-full" style="font-size:1.15rem; font-weight:800; color:var(--primary);">
              <span>আনুমানিক মোট:</span>
              <span>৳${subtotal}</span>
            </div>
            <a href="/order.html" class="btn btn-primary w-full mt-3">
              <i class="fas fa-credit-card"></i> অর্ডার কনফার্ম করতে এগিয়ে যান &rarr;
            </a>
          </div>
        </div>
      </div>
    `;
  },

  updateQty(index, delta) {
    if (DCBD_State.cart[index]) {
      DCBD_State.cart[index].quantity += delta;
      if (DCBD_State.cart[index].quantity <= 0) {
        DCBD_State.cart.splice(index, 1);
      }
      DCBD_Storage.set(DCBD_CONFIG.STORAGE_KEYS.CART, DCBD_State.cart);
      DCBD_ProductCard.updateCounters();
      this.render("cart-table-root");
    }
  },

  remove(index) {
    DCBD_State.cart.splice(index, 1);
    DCBD_Storage.set(DCBD_CONFIG.STORAGE_KEYS.CART, DCBD_State.cart);
    DCBD_ProductCard.updateCounters();
    this.render("cart-table-root");
    DCBD_Toast.info("রিমুভড", "কার্ট থেকে পণ্যটি বাদ দেওয়া হয়েছে।");
  }
};
