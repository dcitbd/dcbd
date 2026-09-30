const DCBD_CustomerOrders = {
  async init() {
    const user = DCBD_Auth.getUser();
    const container = document.getElementById("customer-orders-table-root");
    if (!container) return;
    
    try {
      const res = await DCBD_Api.get("getCustomerOrders", { phone: user?.Mobile || "" });
      const orders = (res && res.success && res.data) ? res.data : [
        { OrderID: "DCBD-481530", Date: "2026-06-11", Products: "Excel B-25 Type-C 18W Fast Charger", Quantity: 1, Total_Amount: "450", Payment_method: "Bkash Payment", Payment_Status: "Paid", Order_Status: "Delivered" },
        { OrderID: "DCBD-921401", Date: "2026-09-15", Products: "Smart Stainless Steel Multifunctional Ring", Quantity: 1, Total_Amount: "194", Payment_method: "COD", Payment_Status: "COD", Order_Status: "In Transit" }
      ];
      
      let html = "";
      orders.forEach(o => {
        html += `
          <tr>
            <td><strong>${o.OrderID}</strong></td>
            <td>${o.Date}</td>
            <td>${o.Products}</td>
            <td style="color:var(--primary); font-weight:700;">৳${o.Total_Amount}</td>
            <td><span class="badge badge-info">${o.Payment_method}</span></td>
            <td><span class="badge badge-success">${o.Order_Status}</span></td>
            <td>
              <button class="btn btn-sm btn-outline" onclick="DCBD_CustomerOrders.viewVoucher('${o.OrderID}')"><i class="fas fa-file-invoice"></i> ভাউচার</button>
            </td>
          </tr>
        `;
      });
      container.innerHTML = html;
    } catch(e) {}
  },

  viewVoucher(orderId) {
    const order = {
      OrderID: orderId,
      Date: new Date().toLocaleDateString(),
      Customer_Name: DCBD_Auth.getUser()?.Name || "গ্রাহক",
      Phone: DCBD_Auth.getUser()?.Mobile || "018xxxxxxx",
      Address: DCBD_Auth.getUser()?.Address || "কুমিল্লা",
      Products: "Smart Stainless Steel Multifunctional Ring",
      Quantity: 1,
      Total_Amount: "194",
      Payment_method: "Cash On Delivery (COD)",
      Payment_Status: "Paid",
      Order_Status: "Success"
    };
    DCBD_Modal.open("অর্ডার ভাউচার", DCBD_Voucher.renderVoucher(order), `<button class="btn btn-primary" onclick="DCBD_Voucher.printVoucher()"><i class="fas fa-print"></i> প্রিন্ট ভাউচার</button>`);
  }
};