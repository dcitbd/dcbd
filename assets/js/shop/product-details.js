/**
 * Product Details Page Logic
 */
const DCBD_ProductDetails = {
  async init() {
    const params = new URLSearchParams(window.location.search);
    const sku = params.get("sku") || "Chi-Ali-000001";
    const product = await DCBD_Products.getBySKU(sku);

    if (!product) {
      document.getElementById("product-details-root").innerHTML = `
        <div class="text-center py-5">
          <h3>পণ্যটি পাওয়া যায়নি</h3>
          <a href="/products.html" class="btn btn-primary mt-3">সকল পণ্য দেখুন</a>
        </div>
      `;
      return;
    }

    const user = DCBD_Auth.getUser();
    const role = user?.role || user?.Account_type || "Customer";

    let displayPrice = product.Selling_Price;
    let wholesaleAlert = "";

    if (role === "Reseller") {
      displayPrice = product.WholeSale_price || product.Selling_Price;
    } else if (role === "WholeSaler") {
      displayPrice = product.WholeSale_price || product.Selling_Price;
      wholesaleAlert = `
        <div class="alert alert-warning p-3 rounded-md mb-3" style="background:#fffbeb; border:1px solid #fde68a; color:#b45309;">
          <i class="fas fa-exclamation-triangle"></i> <strong>হোলসেলার শর্ত:</strong> পাইকারি মূল্যে অর্ডারের ক্ষেত্রে সর্বনিম্ন পরিমাণ ${product.Min_order_Q || '10 Pcs'} হতে হবে।
        </div>
      `;
    }

    const stock = parseInt(product.Stock || 0);
    const isOutOfStock = stock <= 0;
    const images = product.Images ? product.Images.split(",") : ["https://placehold.co/500x500"];

    let thumbnailsHTML = "";
    images.forEach((img, i) => {
      thumbnailsHTML += `
        <img src="${img.trim()}" alt="Thumbnail ${i}" class="product-thumb ${i===0?'active':''}" style="width:70px; height:70px; object-fit:cover; border-radius:var(--radius-sm); cursor:pointer; border:2px solid var(--border-color);" onclick="document.getElementById('main-product-img').src='${img.trim()}'">
      `;
    });

    document.getElementById("product-details-root").innerHTML = `
      <div class="grid grid-cols-2 gap-4">
        <div>
          <div style="background:#fff; border-radius:var(--radius-md); overflow:hidden; border:1px solid var(--border-color); text-align:center; padding:1rem; position:relative;">
            <img id="main-product-img" src="${images[0].trim()}" alt="${product.P_Name}" style="max-height:460px; margin:0 auto; object-fit:contain; transition:transform 0.3s ease;">
          </div>
          <div class="flex gap-2 mt-3 overflow-x-auto">${thumbnailsHTML}</div>
        </div>

        <div>
          <div class="badge badge-info mb-2">${product.Brand || 'Dream Cart BD'}</div>
          <h1 style="font-size:1.6rem; font-weight:800; line-height:1.3; color:var(--text-primary); margin-bottom:10px;">${product.P_Name}</h1>
          <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:15px;">SKU: <strong>${product.SKU}</strong> | ক্যাটাগরি: <strong>${product.Category}</strong> &gt; <strong>${product.Sub_Category}</strong></div>

          <div class="flex items-baseline gap-3 mb-3">
            <span style="font-size:2rem; font-weight:900; color:var(--primary);">৳${displayPrice}</span>
            ${product.Original_Price ? `<span style="font-size:1.1rem; color:var(--text-muted); text-decoration:line-through;">৳${product.Original_Price}</span>` : ""}
            <span class="badge ${isOutOfStock ? 'badge-danger' : 'badge-success'}">${isOutOfStock ? 'স্টক আউট' : 'স্টকে আছে: ' + stock + ' pcs'}</span>
          </div>

          ${wholesaleAlert}

          <div style="margin-bottom:1.5rem; background:var(--bg-subtle); padding:1rem; border-radius:var(--radius-sm);">
            <div><strong>কালার:</strong> ${product.Color || 'Standard'}</div>
            <div><strong>সাইজ/ডাইমেনশন:</strong> ${product.Size || 'Standard'} (${product.WIDTH_CM || 0} x ${product.LENGTH_CM || 0} x ${product.HEIGHT_CM || 0} cm)</div>
            <div><strong>ওজন:</strong> ${product.WEIGHT_KG || '0.1 kg'}</div>
          </div>

          <div class="flex gap-3 mb-4">
            ${isOutOfStock 
              ? `<a href="/order.html?sku=${product.SKU}&type=preorder" class="btn btn-secondary btn-lg flex-1"><i class="fas fa-clock"></i> প্রি-অর্ডার করুন</a>`
              : `<button class="btn btn-primary btn-lg flex-1" onclick="DCBD_ProductCard.orderNow('${product.SKU}')"><i class="fas fa-bolt"></i> সরাসরি অর্ডার করুন</button>
                 <button class="btn btn-outline btn-lg" onclick="DCBD_ProductCard.addToCart('${product.SKU}')"><i class="fas fa-cart-plus"></i> কার্ট</button>`
            }
          </div>

          <div class="flex gap-2">
            <a href="https://wa.me/8801581703822?text=${encodeURIComponent('আসসালামু আলাইকুম, আমি এই প্রোডাক্টটি সম্পর্কে জানতে চাই: ' + product.P_Name + ' (SKU: ' + product.SKU + ')')}" target="_blank" class="btn btn-sm btn-outline flex-1" style="color:#25d366; border-color:#25d366;">
              <i class="fab fa-whatsapp"></i> WhatsApp 1
            </a>
            <a href="https://wa.me/8801818273838?text=${encodeURIComponent('আসসালামু আলাইকুম, প্রোডাক্ট কোয়ারি: ' + product.P_Name + ' (SKU: ' + product.SKU + ')')}" target="_blank" class="btn btn-sm btn-outline flex-1" style="color:#128c7e; border-color:#128c7e;">
              <i class="fab fa-whatsapp"></i> WhatsApp 2
            </a>
          </div>
        </div>
      </div>

      <div class="mt-5" style="background:var(--bg-surface); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:2rem;">
        <h3 class="mb-3 text-primary">পণ্যের বিবরণ (Description)</h3>
        <p style="white-space:pre-line; line-height:1.7; color:var(--text-secondary);">${product.Description}</p>

        <hr style="margin:2rem 0; border:none; border-top:1px solid var(--border-color);">

        <h3 class="mb-3 text-primary">স্পেসিফিকেশন (Specification)</h3>
        <p style="white-space:pre-line; line-height:1.7; color:var(--text-secondary);">${product.Specification}</p>

        ${product.Others ? `
          <hr style="margin:2rem 0; border:none; border-top:1px solid var(--border-color);">
          <h3 class="mb-3 text-primary">অন্যান্য তথ্যাবলী</h3>
          <p style="white-space:pre-line; line-height:1.7; color:var(--text-secondary);">${product.Others}</p>
        ` : ""}
      </div>
    `;
  }
};
