/**
 * Unified API Client for Google Apps Script Backend
 */
const DCBD_Api = {
  async get(action, params = {}) {
    try {
      const url = new URL(DCBD_CONFIG.APPS_SCRIPT_URL);
      url.searchParams.append("action", action);
      Object.keys(params).forEach(k => url.searchParams.append(k, params[k]));

      const res = await fetch(url.toString(), {
        method: "GET",
        headers: { "Accept": "application/json" }
      });
      return await res.json();
    } catch (err) {
      console.warn(`API GET (${action}) fallback:`, err);
      return { success: false, error: err.message };
    }
  },

  async post(action, data = {}) {
    try {
      const payload = {
        action: action,
        data: data,
        timestamp: new Date().toISOString()
      };

      const res = await fetch(DCBD_CONFIG.APPS_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "text/plain;charset=utf-8" }
      });
      return await res.json();
    } catch (err) {
      console.warn(`API POST (${action}) fallback:`, err);
      return { success: false, error: err.message };
    }
  },

  async logViewer(activity = "Page View") {
    try {
      const viewerData = {
        time: new Date().toLocaleString(),
        ip: "Client IP",
        address: "Bangladesh",
        name: DCBD_Auth.getUser()?.Name || "Guest Visitor",
        phone: DCBD_Auth.getUser()?.Mobile || "N/A",
        device: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "Mobile" : "Desktop / Laptop",
        activity: activity
      };
      await this.post("logViewer", viewerData);
    } catch (e) {}
  }
};
