const DCBD_WholesalerOrders = {
  init() {
    const container = document.getElementById("wholesaler-orders-root");
    if (!container) return;
    container.innerHTML = `
      <tr>
        <td><strong>DCBD-547049</strong></td>
        <td>2026-05-16</td>
        <td>D7 Mini Bluetooth Multimedia Speaker (10 Pcs)</td>
        <td>৳৪০০</td>
        <td><span class="badge badge-success">Success</span></td>
        <td><button class="btn btn-sm btn-outline" onclick="window.print()"><i class="fas fa-print"></i> মেমো</button></td>
      </tr>
    `;
  }
};