/**
 * Data Validation
 */
function validateOrderPayload(data) {
  if (!data.Customer_Name || !data.Phone || !data.Total_Amount) {
    return { valid: false, message: "Customer Name, Phone and Total Amount are required" };
  }
  return { valid: true };
}