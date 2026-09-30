/**
 * Role & Worker Permission Guard
 */
const DCBD_Permissions = {
  ROLES: {
    SUPER_ADMIN: "Super Admin",
    ADMIN: "Admin",
    MANAGER: "Manager",
    STAFF: "Staff",
    CUSTOMER: "Customer",
    RESELLER: "Reseller",
    WHOLESALER: "WholeSaler"
  },

  hasRole(allowedRoles) {
    const user = DCBD_Auth.getUser();
    if (!user) return false;
    const userRole = user.role || user.Worker_Type || user.Account_type || "Customer";
    if (userRole === "Super Admin" || user.Role === "Full Access") return true;
    return allowedRoles.includes(userRole);
  }
};
