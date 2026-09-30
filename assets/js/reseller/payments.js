const DCBD_ResellerPayments = {
  init() {
    this.renderHistory();
    document.getElementById("payout-request-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const amount = parseFloat(document.getElementById("payout-amount").value);
      const method = document.getElementById("payout-method").value;
      const account = document.getElementById("payout-account").value;
      
      if (!amount || amount < 500) {
        DCBD_Toast.warning("সতর্কতা", "সর্বনিম্ন উত্তোলনের পরিমাণ ৫০০ টাকা।");
        return;
      }
      
      const netAmount = Math.round(amount * 0.97); // 3% fee deduction
      const reqId = "PAY-REQ-" + Math.floor(1000 + Math.random() * 9000);
      
      const payload = {
        Request_ID: reqId,
        Reseller_ID: DCBD_Auth.getUser()?.Shop_ID || "Dcbd-resale-0001",
        Reseller_Name: DCBD_Auth.getUser()?.Name || "Reseller",
        Payment_Method: method,
        Account_Details: account,
        Amount: amount,
        Net_Amount_Less_3Percent: netAmount,
        Status: "Pending",
        Date: new Date().toLocaleString()
      };
      
      DCBD_Api.post("requestPayout", payload);
      DCBD_Toast.success("রিকোয়েস্ট প্রেরিত", `৳${netAmount} উত্তোলনের রিকোয়েস্ট পেন্ডিং রয়েছে (-৩% ফি কর্তনপরবর্তী)`);
      this.renderHistory();
    });
  },

  renderHistory() {
    const container = document.getElementById("payout-history-root");
    if (!container) return;
    container.innerHTML = `
      <tr>
        <td><strong>PAY-REQ-8492</strong></td>
        <td>2026-09-20</td>
        <td>bKash Personal (01879653143)</td>
        <td>৳৩,০০০</td>
        <td style="color:var(--primary); font-weight:700;">৳২,৯১০ (-৩%)</td>
        <td><span class="badge badge-success">Paid</span></td>
      </tr>
      <tr>
        <td><strong>PAY-REQ-9104</strong></td>
        <td>2026-09-28</td>
        <td>Nagad Personal (01817340052)</td>
        <td>৳২,৫০০</td>
        <td style="color:var(--primary); font-weight:700;">৳২,৪২৫ (-৩%)</td>
        <td><span class="badge badge-warning">Pending</span></td>
      </tr>
    `;
  }
};