const DCBD_AdminProducts = {
  async init() {
    const container = document.getElementById("admin-products-table-root");
    if (!container) return;
    const products = await DCBD_Products.loadAll();
    let html = "";
    products.slice(0, 50).forEach(p => {
      const img = (p.Images && p.Images.split(",")[0]) || "https://placehold.co/60x60";
      html += `
        <tr>
          <td><input type="checkbox" class="product-select-chk" value="${p.SKU}"></td>
          <td><img src="${img}" style="width:40px; height:40px; object-fit:cover; border-radius:4px;"></td>
          <td><strong>${p.SKU}</strong></td>
          <td>${p.P_Name}</td>
          <td>৳${p.Buying_price || 0}</td>
          <td>৳${p.Selling_Price}</td>
          <td>৳${p.WholeSale_price || 0}</td>
          <td><span class="badge ${parseInt(p.Stock)>0?'badge-success':'badge-danger'}">${p.Stock} pcs</span></td>
          <td>
            <a href="/product-details.html?sku=${p.SKU}" target="_blank" class="btn btn-sm btn-outline"><i class="fas fa-eye"></i></a>
            <button class="btn btn-sm btn-outline" style="color:var(--danger);" onclick="DCBD_Toast.info('ডিলিট', 'প্রোডাক্ট ডিলিট করা হয়েছে')"><i class="fas fa-trash"></i></button>
          </td>
        </tr>
      `;
    });
    container.innerHTML = html;
  }
};