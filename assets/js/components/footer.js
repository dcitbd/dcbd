/**
 * Unified Global Footer Component
 */
const DCBD_Footer = {
  render() {
    const footer = document.getElementById("footer-container");
    if (!footer) return;

    footer.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <h3>Dream Cart BD</h3>
              <p class="footer-slogan">অনলাইনে অর্ডার করুন, পণ্য হাতে পেয়ে মূল্য পরিশোধ করুন!</p>
              <p class="footer-desc">
                বাংলাদেশের প্রিমিয়াম ই-কমার্স প্ল্যাটফর্ম। ক্যামেরা, লেন্স, ফ্যাশন, স্মার্ট ওয়াচ ও এক্সক্লুসিভ কালেকশন পাইকারি ও খুচরা বিক্রয় কেন্দ্র।
              </p>
              <div class="footer-social-icons">
                <a href="https://www.facebook.com/dreamcartbd1" target="_blank" class="footer-social-btn" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="https://wa.me/8801581703822" target="_blank" class="footer-social-btn" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                <a href="https://youtube.com" target="_blank" class="footer-social-btn" title="YouTube"><i class="fab fa-youtube"></i></a>
              </div>
            </div>

            <div>
              <h4 class="footer-heading">কুইক পেজ লিংক</h4>
              <div class="footer-links-2col">
                <a href="/index.html">Home</a>
                <a href="/products.html">All Products</a>
                <a href="/categories.html">Categories</a>
                <a href="/brands.html">All Brands</a>
                <a href="/others-market.html">Other Market</a>
                <a href="/tracking.html">Track Order</a>
                <a href="/cart.html">My Cart</a>
                <a href="/favourite.html">Wishlist</a>
              </div>
            </div>

            <div>
              <h4 class="footer-heading">ইউজার পোর্টাল</h4>
              <div class="footer-links">
                <p><a href="/customer/dashboard.html"><i class="fas fa-user"></i> Customer Dashboard</a></p>
                <p><a href="/reseller/dashboard.html"><i class="fas fa-store"></i> Reseller Portal</a></p>
                <p><a href="/wholesaler/dashboard.html"><i class="fas fa-warehouse"></i> WholeSaler Portal</a></p>
                <p><a href="/admin/dashboard.html"><i class="fas fa-user-shield"></i> Admin / Worker</a></p>
                <p><a href="/live-chat.html"><i class="fas fa-comments"></i> 24/7 Live Support</a></p>
              </div>
            </div>

            <div>
              <h4 class="footer-heading">যোগাযোগ ও ঠিকানা</h4>
              <p style="font-size:0.9rem; margin-bottom:8px;"><i class="fas fa-map-marker-alt" style="color:var(--primary);"></i> BaraPara, Adarsha Sadar, Cumilla, Bangladesh</p>
              <p style="font-size:0.9rem; margin-bottom:8px;"><i class="fas fa-phone" style="color:var(--primary);"></i> 01581703822, 01818273838</p>
              <p style="font-size:0.9rem; margin-bottom:8px;"><i class="fas fa-envelope" style="color:var(--primary);"></i> jainal.dcitbd@gmail.com</p>
              <p style="font-size:0.9rem;"><i class="fas fa-clock" style="color:var(--primary);"></i> অফিস সময়: প্রতিদিন সকাল ৮:০০ - রাত ১০:০০</p>
            </div>
          </div>

          <div class="footer-payment-methods">
            <h5 style="margin-bottom:8px; font-weight:700;">We Accept Payment Methods & Cards</h5>
            <div class="payment-icons-row">
              <span class="payment-badge"><i class="fas fa-money-bill-wave"></i> Cash On Delivery (COD)</span>
              <span class="payment-badge"><i class="fas fa-mobile-alt"></i> bKash</span>
              <span class="payment-badge"><i class="fas fa-wallet"></i> Nagad</span>
              <span class="payment-badge"><i class="fas fa-paper-plane"></i> Rocket</span>
              <span class="payment-badge"><i class="fas fa-university"></i> Bank Transfer</span>
              <span class="payment-badge"><i class="far fa-credit-card"></i> Visa / MasterCard</span>
            </div>
          </div>

          <div class="footer-bottom">
            <div>
              &copy; 2026 <strong>Dream Cart BD</strong>. All Rights Reserved.
            <div class="flex items-center gap-2 mt-2">
              <img src="' + DCBD_CONFIG.DEVELOPER_IMAGE + '" alt="Jainal Abedin" style="width:32px; height:32px; border-radius:50%; object-fit:cover; border:2px solid var(--primary);">
              <span>Developer: <a href="https://dcitbd.github.io/Jainal-Abedin/" target="_blank" style="color:var(--primary); font-weight:700;">Jainal Abedin</a> (CEO, <a href="https://dcitbd.github.io/dcitbd/" target="_blank" style="color:var(--primary);">Dream Career IT BD</a>)</span>
            </div>
            </div>
            <div class="footer-bottom-links">
              <a href="/terms.html">Terms & Conditions</a>
              <a href="/privacy.html">Privacy Policy</a>
              <a href="/sitemap.xml">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
};
