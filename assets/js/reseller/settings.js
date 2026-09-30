const DCBD_ResellerSettings = {
  init() {
    const user = DCBD_Auth.getUser();
    if (!user) return;
    document.getElementById("shop-name") && (document.getElementById("shop-name").value = user.Shop_Name || "");
    document.getElementById("nid-number") && (document.getElementById("nid-number").value = user.NID_Number || "");
    document.getElementById("trade-license") && (document.getElementById("trade-license").value = user.Trade_Licence_No || "");
  }
};