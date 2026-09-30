/**
 * Product Filtering Logic (Category Hierarchy, Brands, Stock, Price Sort)
 */
const DCBD_Filters = {
  apply(products, filters) {
    let result = [...products];

    if (filters.category) {
      result = result.filter(p => p.Category === filters.category);
    }
    if (filters.subCategory) {
      result = result.filter(p => p.Sub_Category === filters.subCategory);
    }
    if (filters.childCategory) {
      result = result.filter(p => p.Child_Category === filters.childCategory);
    }
    if (filters.brand) {
      result = result.filter(p => p.Brand === filters.brand);
    }
    if (filters.stock === "in_stock") {
      result = result.filter(p => parseInt(p.Stock || 0) > 0);
    }

    if (filters.priceSort === "low_to_high") {
      result.sort((a, b) => (parseFloat(a.Selling_Price) || 0) - (parseFloat(b.Selling_Price) || 0));
    } else if (filters.priceSort === "high_to_low") {
      result.sort((a, b) => (parseFloat(b.Selling_Price) || 0) - (parseFloat(a.Selling_Price) || 0));
    }

    return result;
  }
};
