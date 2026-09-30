/**
 * Toast Notification System
 */
const DCBD_Toast = {
  container: null,

  init() {
    if (!this.container) {
      this.container = document.createElement("div");
      this.container.className = "toast-container";
      document.body.appendChild(this.container);
    }
  },

  show(title, message, type = "info", duration = 4000) {
    this.init();
    const item = document.createElement("div");
    item.className = `toast-item toast-${type}`;
    
    let icon = "ℹ️";
    if (type === "success") icon = "✅";
    if (type === "error") icon = "❌";
    if (type === "warning") icon = "⚠️";

    item.innerHTML = `
      <div class="toast-icon">${icon}</div>
      <div class="toast-content">
        <h5>${title}</h5>
        <p>${message}</p>
      </div>
    `;
    this.container.appendChild(item);

    setTimeout(() => {
      item.style.opacity = "0";
      item.style.transform = "translateX(100%)";
      setTimeout(() => item.remove(), 300);
    }, duration);
  },

  success(title, msg) { this.show(title, msg, "success"); },
  error(title, msg) { this.show(title, msg, "error"); },
  warning(title, msg) { this.show(title, msg, "warning"); },
  info(title, msg) { this.show(title, msg, "info"); }
};
