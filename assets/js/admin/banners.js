const DCBD_AdminBanners = {
  init() {
    const container = document.getElementById("admin-banners-root");
    if (!container) return;
    container.innerHTML = `
      <tr>
        <td>1</td>
        <td>ঈদ স্পেশাল মেগা অফার ব্যানার</td>
        <td><img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=160" style="height:40px; border-radius:4px;"></td>
        <td>/products.html</td>
        <td>১</td>
        <td><span class="badge badge-success">Active</span></td>
      </tr>
    `;
  }
};