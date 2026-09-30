/**
 * Product Data Service & Catalog Manager
 */
const DCBD_Products = {
  cache: null,

  async loadAll() {
    if (this.cache && this.cache.length > 0) return this.cache;

    try {
      const res = await DCBD_Api.get("getProducts");
      if (res && res.success && Array.isArray(res.data) && res.data.length > 0) {
        this.cache = res.data;
        return this.cache;
      }
    } catch (e) {
      console.warn("Could not fetch remote products, fallback to local dataset:", e);
    }

    // Default Fallback Dataset from Dream Cart BD Google Sheet Products
    this.cache = [
      {
        SKU: "Chi-Ali-000001",
        P_Name: "Smart Stainless Steel Multifunctional Ring for Couple Mood Feeling Intelligent Temperature Sensitive Rings Waterproof Jewelry",
        Category: "Watches Sunglasses Jewellery",
        Sub_Category: "Jewellery",
        Child_Category: "Rings",
        Brand: "China Brand",
        Buying_price: "98",
        Selling_Price: "194",
        Stock: "15",
        Original_Price: "1845",
        WholeSale_price: "123",
        Min_order_Q: "10  Pcs",
        Images: "https://img.drz.lazcdn.com/g/kf/S4ab09cc5364240ea8034e02f35e7c13dJ.jpg_720x720q80.jpg",
        Slug: "Chi-Ali-000001",
        Description: "Dream Cart BD-তে নিয়ে এলো আধুনিক ও স্টাইলিশ Smart Stainless Steel Multifunctional Ring for Couple Mood Feeling Intelligent Temperature Sensitive Rings Waterproof Jewelry। এটি ওয়াটারপ্রুফ এবং মেজাজ বা শারীরিক তাপমাত্রা অনুযায়ী কালার নির্দেশ করে।",
        Specification: "১. পণ্যের নাম: Smart Stainless Steel Multifunctional Ring\n২. ম্যাটেরিয়াল: Stainless Steel\n৩. ফিচার: Temperature Sensitive, Waterproof",
        Others: "১০০% অরিজিনাল ও সেরা মানের প্রোডাক্ট। ক্যাশ অন ডেলিভারি সুবিধা।",
        Color: "silver",
        Size: "6cm",
        WEIGHT_KG: "0.01 kg",
        WIDTH_CM: "20",
        LENGTH_CM: "20",
        HEIGHT_CM: "15"
      },
      {
        SKU: "Chi-Ali-000002",
        P_Name: "Pretty 925 Sterling Silver Snowflake Crystal Zircon Ear Clips Without Piercing for Women Girls Wedding Party Trendy Jewelry Gift",
        Category: "Watches Sunglasses Jewellery",
        Sub_Category: "Jewellery",
        Child_Category: "Earrings",
        Brand: "China Brand",
        Buying_price: "282",
        Selling_Price: "423",
        Stock: "7",
        Original_Price: "1041",
        WholeSale_price: "353",
        Min_order_Q: "10  Pcs",
        Images: "https://packly-local.s3.ap-southeast-1.amazonaws.com/media/20260808_003020_8bf8448e-404f-4530-b52b-4700c4ee6a2a.jpg",
        Slug: "Chi-Ali-000002",
        Description: "উচ্চমানের ৯২৫ স্টার্লিং সিলভার দিয়ে তৈরি এই ইয়ার ক্লিপ কান ফোঁড়ানো ছাড়াই সহজে পরা যায়। পার্টি ও ওয়েডিং এর জন্য পারফেক্ট অনুষঙ্গ।",
        Specification: "১. ম্যাটেরিয়াল: 925 Sterling Silver, Crystal, Zircon\n২. টাইপ: Non-Pierced Ear Clips",
        Others: "নিরাপদ প্যাকেজিং ও দ্রুত হোম ডেলিভারি সুবিধা।",
        Color: "silver",
        Size: "Free Size",
        WEIGHT_KG: "0.003 kg",
        WIDTH_CM: "9",
        LENGTH_CM: "10",
        HEIGHT_CM: "1"
      },
      {
        SKU: "Chi-Ali-000003",
        P_Name: "925 Sterling Silver Heart Zircon Jewelry Set for Women Adjustable Ring Necklace Earrings Bridal Wedding Gift Set",
        Category: "Watches Sunglasses Jewellery",
        Sub_Category: "Jewellery",
        Child_Category: "Jewellery sets",
        Brand: "China Brand",
        Buying_price: "638",
        Selling_Price: "892",
        Stock: "8",
        Original_Price: "1435",
        WholeSale_price: "765",
        Min_order_Q: "5  Pcs",
        Images: "https://packly-local.s3.ap-southeast-1.amazonaws.com/media/20260808_002701_429597a1-c660-4f25-acb2-00f32662c451.jpg",
        Slug: "Chi-Ali-000003",
        Description: "মহিলাদের জন্য রাজকীয় ব্রাইডাল হার্ট জিরকন জুয়েলারি সেট। নেকলেস, ইয়াররিং ও এডজাস্টেবল রিং সমৃদ্ধ।",
        Specification: "১. টাইপ: Necklace, Earrings & Ring Set\n২. ম্যাটেরিয়াল: 925 Sterling Silver",
        Others: "প্রিমিয়াম কোয়ালিটি ও সঠিক মান নিয়ন্ত্রণ।",
        Color: "silver",
        Size: "Free Size",
        WEIGHT_KG: "0.01 kg",
        WIDTH_CM: "2",
        LENGTH_CM: "42",
        HEIGHT_CM: "2"
      },
      {
        SKU: "DCBD-CAM-004",
        P_Name: "Sony Alpha 7C Compact Full-Frame Camera Body (Silver/Black) - 4K Video Professional Mirrorless",
        Category: "Cameras & Optics",
        Sub_Category: "Digital Cameras",
        Child_Category: "Mirrorless",
        Brand: "Sony",
        Buying_price: "165000",
        Selling_Price: "178000",
        Stock: "4",
        Original_Price: "195000",
        WholeSale_price: "172000",
        Min_order_Q: "2 Pcs",
        Images: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=60",
        Slug: "sony-alpha-7c",
        Description: "ফুল ফ্রেম সেন্সর সহ সবচেয়ে কম্প্যাক্ট ও লাইটওয়েট মিররলেস ক্যামেরা। হাই-স্পিড অটোফোকাস ও 4K সিনেমাটিক রেকর্ডিং সুবিধা।",
        Specification: "24.2MP Full-Frame Exmor R CMOS Sensor, BIONZ X Processor, 4K HDR Video",
        Others: "১ বছরের অফিশিয়াল সার্ভিস ওয়ারেন্টি এবং গ্যারান্টি।",
        Color: "Silver / Black",
        Size: "Standard",
        WEIGHT_KG: "0.509 kg",
        WIDTH_CM: "12.4",
        LENGTH_CM: "7.1",
        HEIGHT_CM: "6.0"
      },
      {
        SKU: "DCBD-LENS-005",
        P_Name: "Sony FE 24-70mm F2.8 GM II G Master Lens (SEL2470GM2) Standard Zoom Lens for E-Mount",
        Category: "Cameras & Optics",
        Sub_Category: "Lenses",
        Child_Category: "Zoom Lenses",
        Brand: "Sony",
        Buying_price: "215000",
        Selling_Price: "235000",
        Stock: "2",
        Original_Price: "250000",
        WholeSale_price: "225000",
        Min_order_Q: "2 Pcs",
        Images: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=800&auto=format&fit=crop&q=60",
        Slug: "sony-24-70-gm2",
        Description: "Sony G Master সিরিজের ফ্ল্যাগশিপ 24-70mm F2.8 II জুম লেন্স। আল্ট্রা-শার্প ইমেজ কোয়ালিটি ও ফাস্ট ট্র্যাকিং অটোফোকাস।",
        Specification: "E-Mount Lens / Full-Frame Format, Aperture Range: f/2.8 to f/22, Four XD Linear AF Motors",
        Others: "দুবাই থেকে সরাসরি ইম্পোর্টেড জেনুইন লেন্স।",
        Color: "Black",
        Size: "82mm Filter",
        WEIGHT_KG: "0.695 kg",
        WIDTH_CM: "8.8",
        LENGTH_CM: "12.0",
        HEIGHT_CM: "8.8"
      },
      {
        SKU: "DCBD-CAM-006",
        P_Name: "Canon PowerShot G7 X Mark III Digital Camera - 4K Vlogging Camera with Live Streaming Capability",
        Category: "Cameras & Optics",
        Sub_Category: "Digital Cameras",
        Child_Category: "Point & Shoot",
        Brand: "Canon",
        Buying_price: "72000",
        Selling_Price: "82000",
        Stock: "0",
        Original_Price: "89000",
        WholeSale_price: "77000",
        Min_order_Q: "3 Pcs",
        Images: "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?w=800&auto=format&fit=crop&q=60",
        Slug: "canon-g7x-mark-iii",
        Description: "কনটেন্ট ক্রিয়েটর ও ভ্লগারদের পছন্দের শীর্ষ ক্যামেরা Canon G7X Mark III। ভার্টিক্যাল ভিডিও ও লাইভ স্ট্রিমিং সাপোর্ট।",
        Specification: "20.1MP 1" Stacked CMOS Sensor, DIGIC 8, 4.2x Optical Zoom f/1.8-2.8 Lens, 4K30p & FHD 120p",
        Others: "স্টক আউট হলে প্রি-অর্ডার করতে পারেন। ৭-১০ কার্যদিবসে ডেলিভারি।",
        Color: "Black",
        Size: "Compact",
        WEIGHT_KG: "0.304 kg",
        WIDTH_CM: "10.5",
        LENGTH_CM: "6.1",
        HEIGHT_CM: "4.1"
      }
    ];

    return this.cache;
  },

  async getBySKU(sku) {
    const list = await this.loadAll();
    return list.find(p => p.SKU === sku) || null;
  }
};
