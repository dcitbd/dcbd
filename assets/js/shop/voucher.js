/**
 * Printable & Downloadable Order Voucher / Receipt Generator
 */
const DCBD_Voucher = {
  renderVoucher(order) {
    if (!order) return "";

    return `
      <div class="voucher-card" id="printable-voucher">
        <div class="voucher-watermark">Dream Cart BD</div>
        
        <div class="voucher-header">
          <div class="voucher-logo-text">
            <div class="flex items-center gap-3 mb-2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IMYDMkNYleCqUCLvSDtcioP1MAENEONLcelVu_7byA&s=10" style="height:42px; border-radius:4px;"><h2>Dream Cart BD</h2></div>
            <div style="font-size:0.85rem; color:#64748b;">অনলাইনে অর্ডার করুন, পণ্য হাতে পেয়ে মূল্য পরিশোধ করুন!</div>
            <div style="font-size:0.8rem; color:#64748b; margin-top:4px;">BaraPara, Adarsha Sadar, Cumilla | 01581703822</div>
          </div>
          <div class="voucher-meta">
            <h3 style="color:var(--primary); font-size:1.15rem; margin-bottom:4px;">অর্ডার ভাউচার / ক্যাশ মেমো</h3>
            <div><strong>অর্ডার আইডি:</strong> ${order.OrderID}</div>
            <div><strong>তারিখ:</strong> ${order.Date}</div>
            <div><strong>স্ট্যাটাস:</strong> <span class="badge badge-success">${order.Order_Status || 'Confirmed'}</span></div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-4" style="background:#f8fafc; padding:1.25rem; border-radius:var(--radius-sm); border:1px solid #e2e8f0;">
          <div>
            <h4 style="font-size:0.9rem; font-weight:700; color:#334155; margin-bottom:6px;">গ্রাহকের বিবরণ:</h4>
            <div><strong>নাম:</strong> ${order.Customer_Name}</div>
            <div><strong>মোবাইল:</strong> ${order.Phone}</div>
            <div><strong>ঠিকানা:</strong> ${order.Address}</div>
            <div><strong>অ্যাকাউন্ট টাইপ:</strong> ${order.Account_type || 'Customer'}</div>
          </div>
          <div>
            <h4 style="font-size:0.9rem; font-weight:700; color:#334155; margin-bottom:6px;">পেমেন্ট বিবরণ:</h4>
            <div><strong>পেমেন্ট মেথড:</strong> ${order.Payment_method}</div>
            <div><strong>পেমেন্ট স্ট্যাটাস:</strong> ${order.Payment_Status}</div>
            ${order.Transaction_ID ? `<div><strong>ট্রানজেকশন আইডি:</strong> ${order.Transaction_ID}</div>` : ""}
          </div>
        </div>

        <table style="width:100%; border-collapse:collapse; margin-bottom:1.5rem;">
          <thead>
            <tr style="background:#f1f5f9; text-align:left; font-size:0.85rem; color:#475569;">
              <th style="padding:8px 12px; border-bottom:2px solid #cbd5e1;">পণ্য বিবরণ</th>
              <th style="padding:8px 12px; border-bottom:2px solid #cbd5e1; text-align:center;">পরিমাণ</th>
              <th style="padding:8px 12px; border-bottom:2px solid #cbd5e1; text-align:right;">মোট টাকা</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid #e2e8f0;">
              <td style="padding:12px;">${order.Products}</td>
              <td style="padding:12px; text-align:center;">${order.Quantity || 1}</td>
              <td style="padding:12px; text-align:right; font-weight:700; color:var(--primary);">৳${order.Total_Amount}</td>
            </tr>
          </tbody>
        </table>

        <div class="voucher-barcode">
          <div class="barcode-visual"></div>
          <div class="barcode-number">*${order.OrderID}*</div>
        </div>

        <div style="text-align:center; font-size:0.85rem; color:#64748b; margin-top:1.5rem; border-top:1px dashed #cbd5e1; padding-top:1rem;">
          ❤️ Dream Cart BD-তে কেনাকাটা করার জন্য ধন্যবাদ! ❤️<br>
          যেকোনো প্রয়োজনে আমাদের হটলাইনে যোগাযোগ করুন: 01581703822, 01818273838
        </div>
      </div>
    `;
  },

  printVoucher() {
    window.print();
  }
};
