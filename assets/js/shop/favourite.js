/**
 * Wishlist / Favourite Items Renderer
 */
const DCBD_Favourite = {
  render(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const list = DCBD_State.favourites;
    if (list.length === 0) {
      container.innerHTML = `
        <div class="text-center py-5">
          <i class="far fa-heart fa-4x text-muted mb-3"></i>
          <h3>আপনার উইশলিস্ট খালি!</h3>
          <p class="text-muted mb-4">পছন্দের প্রোডাক্টগুলোর লাভ আইকনে ক্লিক করে ফেভারিট লিস্টে সেভ রাখুন।</p>
          <a href="/products.html" class="btn btn-primary">পণ্যসমূহ ব্রাউজ করুন</a>
        </div>
      `;
      return;
    }

    let html = `<div class="grid grid-cols-4 gap-4">`;
    list.forEach(p => {
      html += DCBD_ProductCard.createHTML(p);
    });
    html += `</div>`;
    container.innerHTML = html;
  }
};
