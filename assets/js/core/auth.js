/**
 * Unified Authentication Controller
 */
const DCBD_Auth = {
  getUser() {
    return DCBD_Storage.get(DCBD_CONFIG.STORAGE_KEYS.USER, null);
  },

  setUser(user) {
    DCBD_State.currentUser = user;
    DCBD_Storage.set(DCBD_CONFIG.STORAGE_KEYS.USER, user);
  },

  logout() {
    DCBD_Storage.remove(DCBD_CONFIG.STORAGE_KEYS.USER);
    DCBD_Storage.remove(DCBD_CONFIG.STORAGE_KEYS.TOKEN);
    DCBD_State.currentUser = null;
    window.location.href = "/login.html";
  },

  async login(role, credentials) {
    try {
      const response = await DCBD_Api.post("login", {
        role: role,
        ...credentials
      });
      if (response && response.success) {
        this.setUser({ ...response.user, role: role });
        return { success: true, user: response.user };
      }
      return { success: false, message: response.message || "Invalid credentials" };
    } catch (e) {
      console.error("Login error:", e);
      return { success: false, message: "Connection to server failed." };
    }
  },

  async register(role, userData) {
    try {
      const response = await DCBD_Api.post("register", {
        role: role,
        userData: userData
      });
      return response;
    } catch (e) {
      return { success: false, message: e.message || "Registration failed" };
    }
  }
};
