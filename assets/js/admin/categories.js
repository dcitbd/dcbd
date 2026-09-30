const DCBD_AdminCategories = {
  async init() {
    const container = document.getElementById("admin-categories-root");
    if (!container) return;
    const cats = await DCBD_Categories.loadAll();
    let html = "";
    cats.forEach((c, idx) => {
      html += `
        <tr>
          <td>${idx + 1}</td>
          <td><strong>${c.Category}</strong></td>
          <td>${c.Sub_Category}</td>
          <td>${c.Chail_Category || c.Child_Category}</td>
          <td><span class="badge badge-success">Active</span></td>
        </tr>
      `;
    });
    container.innerHTML = html;
  }
};