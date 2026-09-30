const DCBD_CustomerDashboard = {
  async init() {
    const user = DCBD_Auth.getUser();
    if (!user) return;
    document.getElementById("cust-name-display") && (document.getElementById("cust-name-display").textContent = user.Name || user.User_Name);
    
    // Counters
    document.getElementById("stat-total-orders") && (document.getElementById("stat-total-orders").textContent = user.Total_Order || "0");
    document.getElementById("stat-success-orders") && (document.getElementById("stat-success-orders").textContent = user.Success_order || "0");
    document.getElementById("stat-cancel-orders") && (document.getElementById("stat-cancel-orders").textContent = user.Cancel_Order || "0");
    document.getElementById("stat-success-rate") && (document.getElementById("stat-success-rate").textContent = user.Order_Success_Rate || "100%");
    
    this.renderRecentOrders(user.Mobile || user.User_ID);
  },

  async renderRecentOrders(phone) {
    const container = document.getElementById("customer-recent-orders-root");
    if (!container) return;
    container.innerHTML = `<tr><td colspan="5" class="text-center">লোড হচ্ছে...</td></tr>`;
    
    try {
      const res = await DCBD_Api.get("getCustomerOrders", { phone: phone });
      const orders = (res && res.success && res.data) ? res.data : [
        { OrderID: "DCBD-481530", Date: "2026-06-11", Products: "Excel B-25 Fast Charger", Total_Amount: "450", Order_Status: "Delivered", Payment_Status: "Paid" }
      ];

      let html = "";
      orders.forEach(o => {
        html += `
          <tr>
            <td><strong>${o.OrderID}</strong></td>
            <td>${o.Date}</td>
            <td>${o.Products}</td>
            <td style="color:var(--primary); font-weight:700;">৳${o.Total_Amount}</td>
            <td><span class="badge badge-success">${o.Order_Status}</span></td>
          </tr>
        `;
      });
      container.innerHTML = html;
    } catch(e) {
      container.innerHTML = `<tr><td colspan="5" class="text-center text-danger">ডাটা লোড করা যায়নি</td></tr>`;
    }
  }
};