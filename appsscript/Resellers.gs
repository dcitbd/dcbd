/**
 * Resellers Module
 */
function getAllResellers() {
  return getSheetDataAsObjects(CONFIG.SHEET_NAMES.RESELLERS);
}