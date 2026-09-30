/**
 * Counter Card Renderer
 */
const DCBD_CounterCard = {
  createHTML(title, count, iconClass, bgColor = "var(--primary)") {
    return `
      <div class="counter-card">
        <div class="counter-icon" style="background:${bgColor};">
          <i class="${iconClass}"></i>
        </div>
        <div class="counter-info">
          <h4>${title}</h4>
          <div class="counter-val">${count}</div>
        </div>
      </div>
    `;
  }
};
