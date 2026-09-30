const DCBD_AdminDashboard = {
  init() {
    const user = DCBD_Auth.getUser();
    document.getElementById("admin-user-name") && (document.getElementById("admin-user-name").textContent = user?.Name || "Admin Jainal Abedin");
    document.getElementById("stat-total-sales") && (document.getElementById("stat-total-sales").textContent = "৳৪,২৫,৭০০");
    document.getElementById("stat-total-orders") && (document.getElementById("stat-total-orders").textContent = "১৪২টি");
    document.getElementById("stat-pending-orders") && (document.getElementById("stat-pending-orders").textContent = "১২টি");
    document.getElementById("stat-total-products") && (document.getElementById("stat-total-products").textContent = "১,৩১৯টি");
  }
};