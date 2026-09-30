/**
 * Product Card Component (Hover Animation, Multi-Role Pricing, Stock Checks)
 */
const DCBD_ProductCard = {
  createHTML(product) {
    const user = DCBD_Auth.getUser();
    const role = user?.role || user?.Account_type || "Customer";

    let displayPrice = product.Selling_Price || 0;
    let wholesaleNote = "";

    if (role === "Reseller") {
      displayPrice = product.WholeSale_price || product.Selling_Price;
    } else if (role === "WholeSaler") {
      displayPrice = product.WholeSale_price || product.Selling_Price;
      wholesaleNote = `<div class="min-order-qty-label"><i class="fas fa-layer-group"></i> Min Order: ${product.Min_order_Q || '10 Pcs'}</div>`;
    }

    const stock = parseInt(product.Stock || 0);
    const isOutOfStock = stock <= 0;
    const images = product.Images ? product.Images.split(",") : ["https://placehold.co/400x400?text=DreamCart"];
    const mainImg = images[0].trim();
    const discount = product.Original_Price && product.Original_Price > displayPrice
      ? Math.round(((product.Original_Price - displayPrice) / product.Original_Price) * 100)
      : null;

    const isFav = DCBD_State.favourites.some(f => f.SKU === product.SKU);

    return `
      <div class="product-card" data-sku="${product.SKU}">
        <div class="product-image-container">
          <a href="/product-details.html?sku=${product.SKU}">
            <img src="${mainImg}" alt="${product.P_Name}" loading="lazy" onerror="this.src='https://placehold.co/400x400?text=Product+Image'">
          </a>
          <div class="card-badges">
            ${discount ? `<span class="discount-badge">-${discount}%</span>` : ""}
            ${isOutOfStock ? `<span class="badge badge-warning">Stock Out</span>` : ""}
          </div>
          <button class="card-fav-btn" onclick="DCBD_ProductCard.toggleFav('${product.SKU}')" title="Favourite">
            <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
          </button>
        </div>

        <div class="product-info">
          <div class="brand-sku-row">
            <span>${product.Brand || 'Dream Cart BD'}</span>
            <span>${product.SKU}</span>
          </div>

          <a href="/product-details.html?sku=${product.SKU}" class="product-title" title="${product.P_Name}">
            ${product.P_Name}
          </a>

          <hr>

          <div class="price-stock-row">
            <div>
              <span class="current-price">৳${displayPrice}</span>
              ${product.Original_Price ? `<span class="original-price">৳${product.Original_Price}</span>` : ""}
            </div>
            <div class="stock-count">
              <i class="fas fa-boxes"></i> Stock: ${stock} pcs
            </div>
          </div>

          ${wholesaleNote}

          <div class="card-actions">
            ${isOutOfStock 
              ? `<a href="/order.html?sku=${product.SKU}&type=preorder" class="btn-pre-order">Pre Order</a>`
              : `<button class="btn-order-now" onclick="DCBD_ProductCard.orderNow('${product.SKU}')">Order Now</button>`
            }
            <button class="card-icon-action" onclick="DCBD_ProductCard.addToCart('${product.SKU}')" title="Add to Cart">
              <i class="fas fa-cart-plus"></i>
            </button>
            <a href="https://wa.me/8801581703822?text=${encodeURIComponent('আসসালামু আলাইকুম, আমি এই প্রোডাক্টটি কিনতে চাই: ' + product.P_Name + ' (SKU: ' + product.SKU + ')')}" target="_blank" class="card-icon-action" title="Send WhatsApp 1" style="color:#25d366;">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a href="https://wa.me/8801818273838?text=${encodeURIComponent('আসসালামু আলাইকুম, প্রোডাক্ট কোয়ারি: ' + product.P_Name + ' (SKU: ' + product.SKU + ')')}" target="_blank" class="card-icon-action" title="Send WhatsApp 2" style="color:#128c7e;">
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  },

  async addToCart(sku) {
    const products = await DCBD_Products.loadAll();
    const product = products.find(p => p.SKU === sku);
    if (!product) return;

    const existing = DCBD_State.cart.find(i => i.SKU === sku);
    if (existing) {
      existing.quantity += 1;
    } else {
      DCBD_State.cart.push({ ...product, quantity: 1 });
    }
    DCBD_Storage.set(DCBD_CONFIG.STORAGE_KEYS.CART, DCBD_State.cart);
    this.updateCounters();
    DCBD_Toast.success("কার্টে যোগ করা হয়েছে!", product.P_Name);
  },

  orderNow(sku) {
    this.addToCart(sku);
    window.location.href = `/order.html?sku=${sku}`;
  },

  async toggleFav(sku) {
    const products = await DCBD_Products.loadAll();
    const product = products.find(p => p.SKU === sku);
    if (!product) return;

    const index = DCBD_State.favourites.findIndex(f => f.SKU === sku);
    if (index > -1) {
      DCBD_State.favourites.splice(index, 1);
      DCBD_Toast.info("ফেভারিট রিমুভড", "পণ্যটি ফেভারিট থেকে বাদ দেওয়া হয়েছে");
    } else {
      DCBD_State.favourites.push(product);
      DCBD_Toast.success("ফেভারিটে যোগ হয়েছে", "পণ্যটি আপনার ফেভারিট লিস্টে যোগ হয়েছে");
    }
    DCBD_Storage.set(DCBD_CONFIG.STORAGE_KEYS.FAVOURITES, DCBD_State.favourites);
    this.updateCounters();
  },

  updateCounters() {
    const navCart = document.getElementById("nav-cart-count");
    const fabCart = document.getElementById("fab-cart-count");
    const navFav = document.getElementById("nav-fav-count");
    if (navCart) navCart.textContent = DCBD_State.cart.length;
    if (fabCart) fabCart.textContent = DCBD_State.cart.length;
    if (navFav) navFav.textContent = DCBD_State.favourites.length;
  }
};
