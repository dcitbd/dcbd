/**
 * Input Validators
 */
const DCBD_Validators = {
  isBDPhone(phone) {
    if (!phone) return false;
    const clean = phone.toString().replace(/\D/g, "");
    return /^(?:\+?88)?01[3-9]\d{8}$/.test(clean);
  },

  isEmail(email) {
    if (!email) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  },

  isStrongPassword(pass) {
    return pass && pass.length >= 6;
  },

  isEmpty(val) {
    return val === null || val === undefined || val.toString().trim() === "";
  }
};
