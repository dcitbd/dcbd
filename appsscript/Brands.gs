/**
 * Brands Module
 */
function getAllBrands() {
  return getSheetDataAsObjects(CONFIG.SHEET_NAMES.BRANDS);
}