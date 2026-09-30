/**
 * Checkout Helper & Order Processor
 */
const DCBD_Checkout = {
  init() {
    if (typeof DCBD_Order !== "undefined") {
      DCBD_Order.initForm();
    }
  },
  validate() {
    return DCBD_Order.calculateTotals();
  }
};
