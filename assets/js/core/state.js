/**
 * Global App State Management
 */
const DCBD_State = {
  cart: [],
  favourites: [],
  currentUser: null,
  products: [],
  categories: [],
  brands: [],
  settings: {},

  init() {
    this.cart = DCBD_Storage.get(DCBD_CONFIG.STORAGE_KEYS.CART, []);
    this.favourites = DCBD_Storage.get(DCBD_CONFIG.STORAGE_KEYS.FAVOURITES, []);
    this.currentUser = DCBD_Storage.get(DCBD_CONFIG.STORAGE_KEYS.USER, null);
    this.applyTheme(DCBD_Storage.get(DCBD_CONFIG.STORAGE_KEYS.THEME, "light"));
  },

  applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    DCBD_Storage.set(DCBD_CONFIG.STORAGE_KEYS.THEME, theme);
  },

  toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    this.applyTheme(next);
    return next;
  },

  getAccountType() {
    return this.currentUser ? (this.currentUser.role || this.currentUser.account_type || "Customer") : "Customer";
  }
};

document.addEventListener("DOMContentLoaded", () => DCBD_State.init());
