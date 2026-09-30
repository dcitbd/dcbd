const DCBD_ResellerCatalogue = {
  async init() {
    const container = document.getElementById("reseller-catalogue-root");
    if (!container) return;
    const products = await DCBD_Products.loadAll();
    let html = `<div class="grid grid-cols-3 gap-4">`;
    products.forEach(p => {
      html += DCBD_ProductCard.createHTML(p);
    });
    html += `</div>`;
    container.innerHTML = html;
  }
};