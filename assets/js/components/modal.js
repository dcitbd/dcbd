/**
 * Dynamic Modal Component
 */
const DCBD_Modal = {
  open(title, contentHTML, footerHTML = "") {
    let overlay = document.getElementById("dcbd-global-modal");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "dcbd-global-modal";
      overlay.className = "modal-overlay";
      document.body.appendChild(overlay);
    }
    overlay.innerHTML = `
      <div class="modal-card">
        <button class="modal-close-btn" onclick="DCBD_Modal.close()">&times;</button>
        <h3 class="mb-3 text-primary">${title}</h3>
        <div class="modal-body">${contentHTML}</div>
        ${footerHTML ? `<div class="modal-footer mt-4 flex justify-between">${footerHTML}</div>` : ""}
      </div>
    `;
    overlay.classList.add("active");
  },

  close() {
    const overlay = document.getElementById("dcbd-global-modal");
    if (overlay) overlay.classList.remove("active");
  }
};
