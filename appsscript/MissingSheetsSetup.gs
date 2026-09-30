/**
 * Missing Sheets Auto Setup Engine
 * Automatically checks and initializes any missing sheets in the workbook!
 */
function setupMissingSheets() {
  const ss = getSpreadsheet();
  
  const required = [
    { name: "Banners", headers: ["Banner_ID", "Title", "Image_URL", "Link", "Sort_Order", "Status", "Created_At"] },
    { name: "Reviews", headers: ["Review_ID", "Product_SKU", "Customer_Name", "Rating", "Comment", "Image", "Status", "Date"] },
    { name: "Payments", headers: ["Request_ID", "Reseller_ID", "Reseller_Name", "Payment_Method", "Account_Details", "Amount", "Net_Amount_Less_3Percent", "Status", "Date", "Transaction_ID"] },
    { name: "Landing-Pages", headers: ["Slug", "Slogan", "Main_Link", "Products", "Product_Images", "Review_Images", "Contact_Call", "Contact_Whatsapp", "Contact_Mail", "Social_Icons", "Status"] },
    { name: "Worker-Logs", headers: ["Log_ID", "Timestamp", "User_ID", "User_Name", "Role", "Action", "Details", "IP_Address"] }
  ];
  
  required.forEach(item => {
    let sheet = ss.getSheetByName(item.name);
    if (!sheet) {
      sheet = ss.insertSheet(item.name);
      sheet.appendRow(item.headers);
      sheet.getRange(1, 1, 1, item.headers.length).setFontWeight("bold");
    }
  });
  
  return "Missing sheets setup successfully checked and applied.";
}