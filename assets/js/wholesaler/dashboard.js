const DCBD_WholesalerDashboard = {
  init() {
    const user = DCBD_Auth.getUser();
    if (!user) return;
    document.getElementById("wholesaler-title") && (document.getElementById("wholesaler-title").textContent = user.Shop_Name || "Wholesale Portal");
    document.getElementById("stat-bulk-orders") && (document.getElementById("stat-bulk-orders").textContent = "১২টি");
    document.getElementById("stat-total-spent") && (document.getElementById("stat-total-spent").textContent = "৳১,৮৫,৪০০");
  }
};