const DCBD_CustomerProfile = {
  init() {
    const user = DCBD_Auth.getUser();
    if (!user) return;
    document.getElementById("prof-name") && (document.getElementById("prof-name").value = user.Name || "");
    document.getElementById("prof-mobile") && (document.getElementById("prof-mobile").value = user.Mobile || "");
    document.getElementById("prof-email") && (document.getElementById("prof-email").value = user.Mail || "");
    document.getElementById("prof-address") && (document.getElementById("prof-address").value = user.Address || "");
    
    document.getElementById("profile-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      user.Name = document.getElementById("prof-name").value;
      user.Mail = document.getElementById("prof-email").value;
      user.Address = document.getElementById("prof-address").value;
      DCBD_Auth.setUser(user);
      DCBD_Toast.success("আপডেট সফল", "আপনার প্রোফাইল তথ্য আপডেট করা হয়েছে।");
    });
  }
};