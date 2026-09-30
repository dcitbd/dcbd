/**
 * Table Component with Export (Print, CSV, PDF)
 */
const DCBD_Table = {
  exportCSV(tableId, filename = "export.csv") {
    const table = document.getElementById(tableId);
    if (!table) return;
    let csv = [];
    const rows = table.querySelectorAll("tr");
    rows.forEach(row => {
      const cols = row.querySelectorAll("td, th");
      const rowData = [];
      cols.forEach(col => rowData.push('"' + col.innerText.replace(/"/g, '""').trim() + '"'));
      csv.push(rowData.join(","));
    });
    const csvFile = new Blob([csv.join("\n")], { type: "text/csv;charset=utf-8;" });
    const downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
  },

  printTable(tableId) {
    window.print();
  }
};
