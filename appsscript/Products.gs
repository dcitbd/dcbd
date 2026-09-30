/**
 * Products Module
 */
function getAllProducts() {
  return getSheetDataAsObjects(CONFIG.SHEET_NAMES.PRODUCTS);
}