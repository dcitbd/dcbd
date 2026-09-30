const DCBD_ResellerOrders = {
  init() {
    const container = document.getElementById("reseller-orders-root");
    if (!container) return;
    container.innerHTML = `
      <tr>
        <td><strong>DCBD-873324</strong></td>
        <td>2026-05-16</td>
        <td>রায়হান (01836816181)</td>
        <td>Excel Fast Charging Data Cable White</td>
        <td>৳১০০</td>
        <td style="color:var(--success); font-weight:700;">৳৫০০</td>
        <td><span class="badge badge-success">Success</span></td>
      </tr>
    `;
  }
};