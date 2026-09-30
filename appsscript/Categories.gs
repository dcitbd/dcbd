/**
 * Categories Module
 */
function getAllCategories() {
  return getSheetDataAsObjects(CONFIG.SHEET_NAMES.CATEGORIES);
}