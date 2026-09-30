/**
 * Orders Management & Email Notification Service
 */
function handlePlaceOrder(orderData) {
  const validation = validateOrderPayload(orderData);
  if (!validation.valid) {
    return { success: false, message: validation.message };
  }
  
  const row = [
    orderData.Date || new Date().toLocaleString(),
    orderData.OrderID,
    orderData.Account_type || "Customer",
    orderData.Customer_Name,
    orderData.Phone,
    orderData.Address,
    orderData.Products,
    orderData.Color || "",
    orderData.Size || "",
    orderData.Quantity || 1,
    orderData.Total_Amount,
    orderData.Payment_method,
    orderData.Transaction_ID || "",
    orderData.Payment_Status || "Pending",
    orderData.Order_Status || "Order Placed",
    orderData.Reseller_Commission || 0,
    orderData.Commission_Status || "Pending"
  ];
  
  const appended = appendRowToSheet(CONFIG.SHEET_NAMES.ORDERS, row);
  
  if (appended) {
    // Send Email Notification to Admin!
    sendOrderNotificationEmail(orderData);
  }
  
  return { success: appended, orderId: orderData.OrderID };
}

function sendOrderNotificationEmail(order) {
  try {
    const subject = `[Dream Cart BD] নতুন অর্ডার এসেছে: ${order.OrderID} (${order.Customer_Name})`;
    const body = `
নতুন অর্ডার বিবরণ:
-------------------------
অর্ডার আইডি: ${order.OrderID}
গ্রাহক নাম: ${order.Customer_Name}
মোবাইল: ${order.Phone}
ঠিকানা: ${order.Address}
পণ্য: ${order.Products}
মোট টাকা: ৳${order.Total_Amount}
পেমেন্ট মেথড: ${order.Payment_method}
স্ট্যাটাস: ${order.Order_Status}
তারিখ: ${order.Date}

কন্ট্রোল প্যানেল থেকে অর্ডার প্রসেস করতে ভিজিট করুন।
Dream Cart BD টিম
    `;
    
    MailApp.sendEmail(CONFIG.ADMIN_EMAIL, subject, body);
  } catch (err) {
    Logger.log("Email Notification Error: " + err.toString());
  }
}