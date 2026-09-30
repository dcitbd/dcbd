const DCBD_AdminBrands = {
  async init() {
    const container = document.getElementById("admin-brands-root");
    if (!container) return;
    const brands = await DCBD_Brands.loadAll();
    let html = "";
    brands.forEach(b => {
      html += `
        <tr>
          <td><strong>${b.Brand_ID}</strong></td>
          <td><img src="${b.Brand_Image}" style="height:30px; object-fit:contain;"></td>
          <td><strong>${b.Brand_Name}</strong></td>
          <td>${b.Brand_Slug}</td>
          <td>${b.Brand_Description}</td>
          <td><span class="badge badge-success">Active</span></td>
        </tr>
      `;
    });
    container.innerHTML = html;
  }
};