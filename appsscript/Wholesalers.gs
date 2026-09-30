/**
 * Wholesalers Module
 */
function getAllWholesalers() {
  return getSheetDataAsObjects(CONFIG.SHEET_NAMES.WHOLESALERS);
}