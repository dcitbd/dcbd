/**
 * Brands Manager
 */
const DCBD_Brands = {
  cache: null,

  async loadAll() {
    if (this.cache) return this.cache;
    try {
      const res = await DCBD_Api.get("getBrands");
      if (res && res.success && Array.isArray(res.data) && res.data.length > 0) {
        this.cache = res.data;
        return this.cache;
      }
    } catch (e) {}

    this.cache = [
      { Brand_ID: "dcbd-b-00001", Brand_Image: "https://placehold.co/120x60?text=China+Brand", Brand_Name: "China Brand", Brand_Slug: "China-Brand", Brand_Description: "China Brand - from china imported" },
      { Brand_ID: "dcbd-b-00002", Brand_Image: "https://placehold.co/120x60?text=Dream+Cart+BD", Brand_Name: "Dream Cart BD", Brand_Slug: "Dream-Cart-BD", Brand_Description: "Dream Cart BD - organic & in-house products" },
      { Brand_ID: "dcbd-b-00003", Brand_Image: "https://placehold.co/120x60?text=Sony", Brand_Name: "Sony", Brand_Slug: "Sony", Brand_Description: "Sony Alpha cameras and G-Master lenses" },
      { Brand_ID: "dcbd-b-00004", Brand_Image: "https://placehold.co/120x60?text=Canon", Brand_Name: "Canon", Brand_Slug: "Canon", Brand_Description: "Canon EOS and PowerShot digital series" }
    ];
    return this.cache;
  }
};
