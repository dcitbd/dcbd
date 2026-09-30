/**
 * Navigation Bar Component with Search & Action Buttons
 */
const DCBD_Navbar = {
  render() {
    const nav = document.getElementById("navbar-container");
    if (!nav) return;

    const user = DCBD_Auth.getUser();
    const cartCount = DCBD_State.cart.length;
    const favCount = DCBD_State.favourites.length;

    let userLink = `<a href="/login.html" class="nav-action-btn"><i class="fas fa-user"></i> Login</a>`;
    if (user) {
      let dashUrl = "/customer/dashboard.html";
      if (user.role === "Reseller") dashUrl = "/reseller/dashboard.html";
      else if (user.role === "WholeSaler") dashUrl = "/wholesaler/dashboard.html";
      else if (user.role === "Admin" || user.Worker_Type) dashUrl = "/admin/dashboard.html";

      userLink = `
        <div class="user-menu-dropdown" style="position:relative; display:inline-block;">
          <a href="${dashUrl}" class="nav-action-btn" style="background:var(--primary); color:#fff;">
            <i class="fas fa-user-circle"></i> ${user.Name || user.User_Name || "Account"}
          </a>
        </div>
      `;
    }

    nav.innerHTML = `
      <header class="site-navbar">
        <div class="container navbar-wrapper">
          <a href="/index.html" class="navbar-brand">
            <img src="' + (DCBD_CONFIG.SHOP_LOGO || '/assets/images/logo/logo.svg') + '" alt="Dream Cart BD" style="height:44px; width:auto; border-radius:4px;">
            <span>Dream Cart BD</span>
          </a>

          <div class="navbar-search-box">
            <div class="search-input-group">
              <input type="text" id="global-search-input" class="search-input" placeholder="পণ্য খুঁজুন (নাম, SKU বা ক্যাটাগরি লিখুন)..." autocomplete="off">
              <button class="search-btn" id="global-search-btn"><i class="fas fa-search"></i> খুঁজুন</button>
            </div>
            <div id="search-preview-box" class="search-preview-dropdown"></div>
          </div>

          <div class="navbar-actions">
            <a href="/products.html" class="nav-action-btn"><i class="fas fa-boxes"></i> Products</a>
            <a href="/cart.html" class="nav-action-btn">
              <i class="fas fa-shopping-cart"></i>
              <span class="badge badge-danger" id="nav-cart-count">${cartCount}</span>
            </a>
            <a href="/favourite.html" class="nav-action-btn">
              <i class="fas fa-heart" style="color:#e53935;"></i>
              <span class="badge badge-danger" id="nav-fav-count">${favCount}</span>
            </a>
            ${userLink}
            <button class="theme-toggle-btn" id="theme-switcher-btn" title="Toggle Light/Dark Theme">
              <i class="fas fa-moon"></i>
            </button>
          </div>
        </div>
      </header>
    `;

    // Render Fixed Action Buttons
    this.renderFixedButtons();

    // Setup Event Listeners
    document.getElementById("theme-switcher-btn")?.addEventListener("click", () => {
      const mode = DCBD_State.toggleTheme();
      const icon = document.querySelector("#theme-switcher-btn i");
      if (icon) icon.className = mode === "dark" ? "fas fa-sun" : "fas fa-moon";
    });

    DCBD_Search.init();
  },

  renderFixedButtons() {
    let fab = document.getElementById("fixed-action-buttons-root");
    if (!fab) {
      fab = document.createElement("div");
      fab.id = "fixed-action-buttons-root";
      fab.className = "fixed-action-buttons";
      document.body.appendChild(fab);
    }
    fab.innerHTML = `
      <!-- Cart FAB -->
      <a href="/cart.html" class="fab-btn fab-cart" title="View Cart">
        <i class="fas fa-shopping-cart"></i>
        <span class="fab-badge" id="fab-cart-count">${DCBD_State.cart.length}</span>
      </a>

      <!-- WhatsApp FAB with sub-menu -->
      <div style="position:relative;">
        <button class="fab-btn fab-whatsapp" id="fab-whatsapp-toggle" title="WhatsApp Chat">
          <i class="fab fa-whatsapp"></i>
        </button>
        <div class="fab-sub-menu" id="fab-whatsapp-menu">
          <a href="https://wa.me/8801581703822" target="_blank" class="fab-sub-item"><i class="fab fa-whatsapp"></i> 01581703822 (Support 1)</a>
          <a href="https://wa.me/8801818273838" target="_blank" class="fab-sub-item"><i class="fab fa-whatsapp"></i> 01818273838 (Support 2)</a>
        </div>
      </div>

      <!-- Call FAB with sub-menu -->
      <div style="position:relative;">
        <button class="fab-btn fab-call" id="fab-call-toggle" title="Call Us">
          <i class="fas fa-phone-alt"></i>
        </button>
        <div class="fab-sub-menu" id="fab-call-menu">
          <a href="tel:01581703822" class="fab-sub-item"><i class="fas fa-phone"></i> 01581703822</a>
          <a href="tel:01818273838" class="fab-sub-item"><i class="fas fa-phone"></i> 01818273838</a>
        </div>
      </div>

      <!-- Live Chat FAB -->
      <a href="/live-chat.html" class="fab-btn fab-chat" title="Live Customer Chat">
        <i class="fas fa-comments"></i>
      </a>
    `;

    document.getElementById("fab-whatsapp-toggle")?.addEventListener("click", () => {
      document.getElementById("fab-whatsapp-menu")?.classList.toggle("show");
    });
    document.getElementById("fab-call-toggle")?.addEventListener("click", () => {
      document.getElementById("fab-call-menu")?.classList.toggle("show");
    });
  }
};
