/**
 * Authentication Module
 * Verifies credentials against Customers, Resellers, Wholesalers, or Admin/Worker sheets
 */
function authenticateUser(role, username, password) {
  const ss = getSpreadsheet();
  let sheetName = CONFIG.SHEET_NAMES.CUSTOMERS;
  
  if (role === "Reseller") sheetName = CONFIG.SHEET_NAMES.RESELLERS;
  else if (role === "WholeSaler") sheetName = CONFIG.SHEET_NAMES.WHOLESALERS;
  else if (role === "Admin" || role === "Worker") sheetName = CONFIG.SHEET_NAMES.ADMIN_WORKER;
  
  const users = getSheetDataAsObjects(sheetName);
  
  for (let u of users) {
    const uName = (u.User_ID || u.User_Name || u.Mobile || "").toString().trim();
    const uPass = (u.Password || "").toString().trim();
    
    if (uName.toLowerCase() === username.toLowerCase().trim() && uPass === password.trim()) {
      return {
        authenticated: true,
        user: u
      };
    }
  }
  
  return { authenticated: false };
}