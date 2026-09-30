/**
 * Order Tracking Service
 */
const DCBD_Tracking = {
  async track(query) {
    if (!query) return null;
    try {
      const res = await DCBD_Api.get("trackOrder", { query: query.trim() });
      if (res && res.success && res.order) {
        return res.order;
      }
    } catch (e) {}

    // Fallback Mock Query Check
    const dummy = {
      OrderID: query.toUpperCase(),
      Customer_Name: "সম্মানিত গ্রাহক",
      Phone: "018xxxxxxx",
      Address: "কুমিল্লা, বাংলাদেশ",
      Products: "Smart Stainless Steel Multifunctional Ring",
      Total_Amount: "450",
      Payment_method: "Cash On Delivery (COD)",
      Payment_Status: "COD",
      Order_Status: "In Transit",
      Date: new Date().toLocaleDateString()
    };
    return dummy;
  }
};
