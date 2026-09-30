const DCBD_ResellerSalesReport = {
  init() {
    document.getElementById("download-report-btn")?.addEventListener("click", () => {
      DCBD_Table.exportCSV("reseller-report-table", "Reseller_Sales_Report.csv");
    });
    document.getElementById("print-report-btn")?.addEventListener("click", () => {
      window.print();
    });
  }
};