/**
 * Core API Router for GET and POST Requests
 */
function doGet(e) {
  const action = e.parameter.action;
  
  try {
    if (action === "getProducts") return successResponse(getAllProducts());
    if (action === "getCategories") return successResponse(getAllCategories());
    if (action === "getBrands") return successResponse(getAllBrands());
    if (action === "getBanners") return successResponse(getAllBanners());
    if (action === "getSettings") return successResponse(getAllSettings());
    if (action === "trackOrder") {
      const q = e.parameter.query;
      const orders = getSheetDataAsObjects(CONFIG.SHEET_NAMES.ORDERS);
      const matched = orders.find(o => o.OrderID == q || o.Phone == q);
      return successResponse(matched || null);
    }
    if (action === "getCustomerOrders") {
      const phone = e.parameter.phone;
      const orders = getSheetDataAsObjects(CONFIG.SHEET_NAMES.ORDERS);
      const userOrders = orders.filter(o => o.Phone == phone);
      return successResponse(userOrders);
    }
    
    return successResponse({ status: "API is active", app: CONFIG.SHOP_NAME });
  } catch (err) {
    return errorResponse(err.toString());
  }
}

function doPost(e) {
  try {
    const postData = JSON.parse(e.postData.contents);
    const action = postData.action;
    const data = postData.data;
    
    if (action === "placeOrder") {
      const result = handlePlaceOrder(data);
      return successResponse(result, "Order Placed Successfully");
    }
    if (action === "saveIncompleteOrder") {
      const result = handleSaveIncompleteOrder(data);
      return successResponse(result, "Incomplete Order Logged");
    }
    if (action === "logViewer") {
      const result = logViewerActivity(data);
      return successResponse(result);
    }
    if (action === "login") {
      const res = authenticateUser(data.role, data.username, data.password);
      if (res.authenticated) return successResponse({ user: res.user });
      return errorResponse("Invalid username or password");
    }
    if (action === "requestPayout") {
      const row = [
        data.Request_ID, data.Reseller_ID, data.Reseller_Name, data.Payment_Method,
        data.Account_Details, data.Amount, data.Net_Amount_Less_3Percent, data.Status,
        data.Date, data.Transaction_ID || ""
      ];
      appendRowToSheet(CONFIG.SHEET_NAMES.PAYMENTS, row);
      return successResponse(true, "Payout requested");
    }
    
    return errorResponse("Invalid Action");
  } catch (err) {
    return errorResponse(err.toString());
  }
}