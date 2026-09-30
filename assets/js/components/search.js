/**
 * Live Autocomplete Product Search with Interactive Previews
 */
const DCBD_Search = {
  init() {
    const input = document.getElementById("global-search-input");
    const preview = document.getElementById("search-preview-box");
    const btn = document.getElementById("global-search-btn");
    if (!input || !preview) return;

    let debounceTimer;

    input.addEventListener("input", (e) => {
      clearTimeout(debounceTimer);
      const query = e.target.value.trim().toLowerCase();
      if (query.length < 2) {
        preview.classList.remove("active");
        preview.innerHTML = "";
        return;
      }
      debounceTimer = setTimeout(() => this.searchProducts(query, preview), 250);
    });

    btn?.addEventListener("click", () => {
      const q = input.value.trim();
      if (q) window.location.href = `/products.html?q=${encodeURIComponent(q)}`;
    });

    document.addEventListener("click", (e) => {
      if (!input.contains(e.target) && !preview.contains(e.target)) {
        preview.classList.remove("active");
      }
    });
  },

  async searchProducts(query, previewContainer) {
    const products = await DCBD_Products.loadAll();
    const matches = products.filter(p => 
      (p.P_Name && p.P_Name.toLowerCase().includes(query)) ||
      (p.SKU && p.SKU.toLowerCase().includes(query)) ||
      (p.Category && p.Category.toLowerCase().includes(query))
    ).slice(0, 6);

    if (matches.length === 0) {
      previewContainer.innerHTML = `<div class="p-3 text-center text-muted">কোনো পণ্য পাওয়া যায়নি</div>`;
      previewContainer.classList.add("active");
      return;
    }

    let html = "";
    matches.forEach(p => {
      const img = (p.Images && p.Images.split(",")[0]) || "https://placehold.co/60x60";
      html += `
        <a href="/product-details.html?sku=${p.SKU}" class="search-preview-item">
          <img src="${img}" alt="${p.P_Name}">
          <div>
            <div style="font-weight:600; font-size:0.9rem; color:var(--text-primary);">${p.P_Name}</div>
            <div style="font-size:0.8rem; color:var(--primary); font-weight:700;">৳${p.Selling_Price} <span style="color:var(--text-muted); font-size:0.75rem;">(SKU: ${p.SKU})</span></div>
          </div>
        </a>
      `;
    });
    html += `
      <div style="text-align:center; padding:8px; background:var(--bg-subtle);">
        <a href="/products.html?q=${encodeURIComponent(query)}" style="font-weight:600; font-size:0.85rem; color:var(--primary);">সকল ফলাফল দেখুন &rarr;</a>
      </div>
    `;

    previewContainer.innerHTML = html;
    previewContainer.classList.add("active");
  }
};
