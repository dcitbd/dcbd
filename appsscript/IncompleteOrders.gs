/**
 * Incomplete Orders Tracking
 */
function handleSaveIncompleteOrder(data) {
  const row = [
    data.date || new Date().toLocaleString(),
    data.orderId,
    data.accountType || "Customer",
    data.customerName,
    data.phone,
    data.address || "Not specified",
    data.products,
    data.totalAmount,
    data.status || "Incomplete"
  ];
  return appendRowToSheet(CONFIG.SHEET_NAMES.INCOMPLETE_ORDERS, row);
}