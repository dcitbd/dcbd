function logViewerActivity(data) {
  const row = [
    data.time || new Date().toLocaleString(),
    data.ip || "N/A",
    data.address || "Bangladesh",
    data.name || "Guest Visitor",
    data.phone || "N/A",
    data.device || "Web",
    data.activity || "Page View"
  ];
  return appendRowToSheet(CONFIG.SHEET_NAMES.VIEWERS, row);
}