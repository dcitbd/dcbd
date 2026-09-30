/**
 * Dream Cart BD - Global Configuration
 */
const DCBD_CONFIG = {
  SHOP_LOGO: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IMYDMkNYleCqUCLvSDtcioP1MAENEONLcelVu_7byA&s=10",
  DEVELOPER_IMAGE: "https://scontent.fdac24-5.fna.fbcdn.net/v/t39.99422-6/748763443_1355179329312781_3762544494183960829_n.png?stp=dst-jpg_tt6&cstp=mx876x1414&ctp=s876x1414&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEgpskzgAVWN3ZiohXZA-RhiddumrjTx6WJ126auNPHpRbk_pIDiYLXfo5UR9FYrkKKGwNHxgicb8fdqAfCdAzm&_nc_ohc=ulolVsVxolUQ7kNvwFbbn_s&_nc_oc=Adqwy7DrnjEKjOAfZPttbAGnlBGmXslovULfm4dCZditFerwrSiULyvnQBwCwT-ctOY&_nc_zt=14&_nc_ht=scontent.fdac24-5.fna&_nc_gid=QjQg-WZiaHQGDcl9YGAVCA&_nc_ss=7b2a8&oh=00_AQOthzROIPmAhM-IMyLs5b5IxRzmoCsj5_Ucs02h26YSdw&oe=6AC34270",
  APP_NAME: "Dream Cart BD",
  SLOGAN: "অনলাইনে অর্ডার করুন, পণ্য হাতে পেয়ে মূল্য পরিশোধ করুন!",
  DEVELOPER: {
    name: "Jainal Abedin",
    title: "CEO, Dream Career IT BD",
    portfolio: "https://dcitbd.github.io/Jainal-Abedin/",
    company: "https://dcitbd.github.io/dcitbd/"
  },
  APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbwflHuBqMKWpKPTTVNY-grU_dnNphwELXbk6Hn-wcBjxJk4xvqScmT2n8i3ZQCStMI3/exec",
  SHEET_URL: "https://docs.google.com/spreadsheets/d/1BGi8IXV6S7uXDi4IaR_sCJYhtpfzyLGuldo4NnGVmR8/edit",
  WHATSAPP_NUMBERS: ["01581703822", "01818273838"],
  CALL_NUMBERS: ["01581703822", "01818273838"],
  SHOP_EMAIL: "jainal.dcitbd@gmail.com",
  SHOP_ADDRESS: "BaraPara, Adarsha Sadar, Cumilla, Bangladesh",
  OFFICE_HOURS: "Every Day 8:00 AM to 10:00 PM",
  
  DELIVERY_FEES: {
    DHAKA: { label: "In Dhaka", fee: 90 },
    CUMILLA: { label: "In Cumilla", fee: 70 },
    OUTSIDE_DHAKA: { label: "Out of Dhaka", fee: 120 },
    PICKUP: { label: "Office Pickup", fee: 0 }
  },
  
  OFFERS: {
    FREE_DELIVERY_THRESHOLD: 2000,
    ONLINE_PAYMENT_DISCOUNT_PERCENT: 5
  },
  
  PAYMENT_METHODS: [
    "Cash On Delivery (COD)",
    "Bkash Personal",
    "Bkash Payment",
    "Nagad Personal",
    "Rocket Personal",
    "Bank Account",
    "Cash Payment"
  ],

  PAYMENT_ACCOUNTS: {
    bkashPersonal: "01879653143",
    bkashMerchant: "01581703822",
    nagadPersonal: "01879653143",
    rocketPersonal: "01581703822",
    bkashPaymentLink: "https://shop.bkash.com/j-a-sagor-computer01581703822/paymentlink",
    bank: "Jainal Abedin\n20508070200030208\nMaheshkhali Sub branch\n125260525\nIBBLBDDH"
  },
  
  STORAGE_KEYS: {
    USER: "dcbd_user",
    TOKEN: "dcbd_auth_token",
    CART: "dcbd_cart",
    FAVOURITES: "dcbd_favourites",
    THEME: "dcbd_theme"
  }
};
