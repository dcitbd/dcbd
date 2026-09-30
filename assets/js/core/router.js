/**
 * Route Guard Controller
 * Anyone cannot access dashboard / admin panel without authenticating!
 */
const DCBD_Router = {
  guard() {
    const path = window.location.pathname.toLowerCase();
    const user = DCBD_Auth.getUser();

    // Check Admin Portal
    if (path.includes("/admin/")) {
      if (path.endsWith("/admin/login.html")) {
        if (user && (user.role === "Admin" || user.Worker_Type)) {
          window.location.href = "/admin/dashboard.html";
        }
        return;
      }
      if (!user || (!user.Worker_Type && user.role !== "Admin")) {
        window.location.href = "/admin/login.html?redirect=" + encodeURIComponent(window.location.pathname);
        return;
      }
    }

    // Check Customer Portal
    if (path.includes("/customer/")) {
      if (!user) {
        window.location.href = "/login.html?redirect=" + encodeURIComponent(window.location.pathname);
        return;
      }
    }

    // Check Reseller Portal
    if (path.includes("/reseller/")) {
      if (path.endsWith("/reseller/login.html") || path.endsWith("/reseller/register.html")) {
        if (user && user.role === "Reseller") {
          window.location.href = "/reseller/dashboard.html";
        }
        return;
      }
      if (!user || user.role !== "Reseller") {
        window.location.href = "/reseller/login.html?redirect=" + encodeURIComponent(window.location.pathname);
        return;
      }
    }

    // Check Wholesaler Portal
    if (path.includes("/wholesaler/")) {
      if (path.endsWith("/wholesaler/login.html") || path.endsWith("/wholesaler/register.html")) {
        if (user && user.role === "WholeSaler") {
          window.location.href = "/wholesaler/dashboard.html";
        }
        return;
      }
      if (!user || user.role !== "WholeSaler") {
        window.location.href = "/wholesaler/login.html?redirect=" + encodeURIComponent(window.location.pathname);
        return;
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", () => DCBD_Router.guard());
