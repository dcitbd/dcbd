const DCBD_CustomerSettings = {
  init() {
    document.getElementById("change-pass-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const newP = document.getElementById("new-password").value;
      if (newP.length < 6) {
        DCBD_Toast.warning("সতর্কতা", "পাসওয়ার্ড অন্তত ৬ অক্ষরের হতে হবে।");
        return;
      }
      DCBD_Toast.success("সফল", "পাসওয়ার্ড সফলভাবে পরিবর্তন করা হয়েছে।");
    });
  }
};