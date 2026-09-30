const DCBD_AdminOrders = {
  init() {
    const container = document.getElementById("admin-orders-root");
    if (!container) return;
    container.innerHTML = `
      <tr>
        <td><strong>DCBD-547049</strong></td>
        <td>WholeSaler</td>
        <td>রায়হান<br><small>01836816181</small></td>
        <td>D7 Mini Bluetooth Multimedia Speaker</td>
        <td>৳৪০০</td>
        <td>Cash On Delivery</td>
        <td><span class="badge badge-success">Delivered</span></td>
        <td>
          <button class="btn btn-sm btn-outline"><i class="fas fa-edit"></i></button>
        </td>
      </tr>
      <tr>
        <td><strong>DCBD-873324</strong></td>
        <td>Reseller</td>
        <td>রায়হান<br><small>01836816181</small></td>
        <td>Excel Fast Charging Data Cable White</td>
        <td>৳১০০</td>
        <td>Bkash Personal</td>
        <td><span class="badge badge-warning">Processing</span></td>
        <td>
          <button class="btn btn-sm btn-outline"><i class="fas fa-edit"></i></button>
        </td>
      </tr>
    `;
  }
};