/**
 * Customers Module
 */
function getAllCustomers() {
  return getSheetDataAsObjects(CONFIG.SHEET_NAMES.CUSTOMERS);
}