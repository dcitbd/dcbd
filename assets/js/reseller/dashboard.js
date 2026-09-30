const DCBD_ResellerDashboard = {
  init() {
    const user = DCBD_Auth.getUser();
    if (!user) return;
    document.getElementById("reseller-shop-name") && (document.getElementById("reseller-shop-name").textContent = user.Shop_Name || "My Reseller Shop");
    document.getElementById("stat-total-sales") && (document.getElementById("stat-total-sales").textContent = "৳৪৫,২০০");
    document.getElementById("stat-total-commission") && (document.getElementById("stat-total-commission").textContent = "৳৮,৫০০");
    document.getElementById("stat-payable-amount") && (document.getElementById("stat-payable-amount").textContent = "৳৫,২০০");
  }
};