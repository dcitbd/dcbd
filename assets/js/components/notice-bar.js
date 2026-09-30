/**
 * Top Offer & Contact Notice Bar
 */
const DCBD_NoticeBar = {
  render() {
    const container = document.getElementById("notice-bar-container");
    if (!container) return;

    container.innerHTML = `
      <div class="notice-bar">
        <div class="container notice-bar-content">
          <div class="notice-ticker">
            <span class="notice-text">
              ✨ ৳২,০০০ বা তার বেশি অর্ডারে ফ্রি শিপিং! | অনলাইনে পেমেন্ট করলে ৫% ইনস্ট্যান্ট ডিসকাউন্ট! | সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা! ✨
            </span>
          </div>
          <div class="notice-contact-links">
            <a href="tel:01581703822"><i class="fas fa-phone-alt"></i> 01581703822</a>
            <a href="https://wa.me/8801581703822" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp</a>
          </div>
        </div>
      </div>
    `;
  }
};
