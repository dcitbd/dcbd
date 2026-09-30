const DCBD_WholesalerSettings = {
  init() {
    const user = DCBD_Auth.getUser();
    if (!user) return;
    document.getElementById("ws-shop-name") && (document.getElementById("ws-shop-name").value = user.Shop_Name || "");
  }
};