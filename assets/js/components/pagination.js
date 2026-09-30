/**
 * 60 Products Per Page Pagination Controller
 */
const DCBD_Pagination = {
  ITEMS_PER_PAGE: 60,

  paginate(items, page = 1) {
    const totalPages = Math.ceil(items.length / this.ITEMS_PER_PAGE);
    const start = (page - 1) * this.ITEMS_PER_PAGE;
    const paginatedItems = items.slice(start, start + this.ITEMS_PER_PAGE);

    return {
      items: paginatedItems,
      currentPage: page,
      totalPages: totalPages,
      totalCount: items.length
    };
  },

  renderControls(containerId, currentPage, totalPages, onPageChange) {
    const container = document.getElementById(containerId);
    if (!container || totalPages <= 1) {
      if (container) container.innerHTML = "";
      return;
    }

    let html = `<div class="pagination">`;
    if (currentPage > 1) {
      html += `<button class="page-btn" onclick="${onPageChange}(${currentPage - 1})"><i class="fas fa-chevron-left"></i></button>`;
    }
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
        html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="${onPageChange}(${i})">${i}</button>`;
      } else if (i === currentPage - 3 || i === currentPage + 3) {
        html += `<span class="page-btn" style="border:none; background:transparent;">...</span>`;
      }
    }
    if (currentPage < totalPages) {
      html += `<button class="page-btn" onclick="${onPageChange}(${currentPage + 1})"><i class="fas fa-chevron-right"></i></button>`;
    }
    html += `</div>`;
    container.innerHTML = html;
  }
};
