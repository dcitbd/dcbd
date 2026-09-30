const DCBD_ResellerPaymentMethods = {
  init() {
    document.getElementById("add-payment-method-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      DCBD_Toast.success("সফল", "পেমেন্ট মেথড সফলভাবে যুক্ত করা হয়েছে।");
    });
  }
};