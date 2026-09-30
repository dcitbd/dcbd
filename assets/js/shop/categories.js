/**
 * Categories Hierarchy Builder & Service
 */
const DCBD_Categories = {
  cache: null,

  async loadAll() {
    if (this.cache) return this.cache;
    try {
      const res = await DCBD_Api.get("getCategories");
      if (res && res.success && Array.isArray(res.data) && res.data.length > 0) {
        this.cache = res.data;
        return this.cache;
      }
    } catch (e) {}

    this.cache = [
      { Catagory_ID: "Dcbd-cat-001", Catagory_Slug: "watches-jewellery", Category_Image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300", Category: "Watches Sunglasses Jewellery", Sub_Category: "Jewellery", Chail_Category: "Rings" },
      { Catagory_ID: "Dcbd-cat-001", Catagory_Slug: "watches-jewellery", Category_Image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300", Category: "Watches Sunglasses Jewellery", Sub_Category: "Jewellery", Chail_Category: "Earrings" },
      { Catagory_ID: "Dcbd-cat-001", Catagory_Slug: "watches-jewellery", Category_Image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300", Category: "Watches Sunglasses Jewellery", Sub_Category: "Jewellery", Chail_Category: "Jewellery sets" },
      { Catagory_ID: "Dcbd-cat-002", Catagory_Slug: "cameras-optics", Category_Image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300", Category: "Cameras & Optics", Sub_Category: "Digital Cameras", Chail_Category: "Mirrorless" },
      { Catagory_ID: "Dcbd-cat-002", Catagory_Slug: "cameras-optics", Category_Image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300", Category: "Cameras & Optics", Sub_Category: "Digital Cameras", Chail_Category: "Point & Shoot" },
      { Catagory_ID: "Dcbd-cat-002", Catagory_Slug: "cameras-optics", Category_Image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=300", Category: "Cameras & Optics", Sub_Category: "Lenses", Chail_Category: "Zoom Lenses" }
    ];
    return this.cache;
  },

  buildTree(categories) {
    const tree = {};
    categories.forEach(item => {
      const cat = item.Category || "Other";
      const sub = item.Sub_Category || "General";
      const child = item.Chail_Category || item.Child_Category || "All";

      if (!tree[cat]) tree[cat] = {};
      if (!tree[cat][sub]) tree[cat][sub] = [];
      if (!tree[cat][sub].includes(child)) tree[cat][sub].push(child);
    });
    return tree;
  }
};
