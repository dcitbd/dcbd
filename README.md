# 🚀 Dream Cart BD — Digital E-Commerce Platform

<p align="center">
  <img src="https://img.shields.io/badge/Platform-Dream%20Cart%20BD-111827?style=for-the-badge" alt="Dream Cart BD">
  <img src="https://img.shields.io/badge/Architecture-Digital%20Commerce-2563EB?style=for-the-badge" alt="Digital Commerce">
  <img src="https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS%20%7C%20JavaScript-F59E0B?style=for-the-badge" alt="Frontend">
  <img src="https://img.shields.io/badge/Backend-Google%20Apps%20Script-16A34A?style=for-the-badge" alt="Google Apps Script">
  <img src="https://img.shields.io/badge/Data-Google%20Sheets-0F9D58?style=for-the-badge" alt="Google Sheets">
  <img src="https://img.shields.io/badge/Responsive-Mobile%20%7C%20Tablet%20%7C%20Desktop%20%7C%20TV-7C3AED?style=for-the-badge" alt="Responsive">
</p>

<p align="center">
  <strong>A powerful, responsive, multi-role e-commerce ecosystem powered by Google Sheets + Google Apps Script.</strong>
</p>

<p align="center">
  <a href="https://dcitbd.github.io/Jainal-Abedin/">Developer</a> •
  <a href="https://dcitbd.github.io/dcitbd/">Dream Career IT BD</a> •
  <a href="https://docs.google.com/spreadsheets/d/1BGi8IXV6S7uXDi4IaR_sCJYhtpfzyLGuldo4NnGVmR8/edit?gid=2106627979#gid=2106627979">Google Sheet</a>
</p>

---

## ✨ Project Vision

**Dream Cart BD** is designed as a complete digital commerce platform rather than a simple product-selling website.

The system combines:

- 🛍️ Customer-facing online shopping
- 🤝 Reseller management
- 📦 Wholesaler management
- 👨‍💼 Admin & worker management
- 📊 Google Sheets-based data management
- ⚙️ Google Apps Script API/workflow
- 💳 Payment management
- 🚚 Delivery management
- 📈 Business reporting
- 💬 Live chat
- 🧾 Digital vouchers
- 🎯 Landing-page management
- 🔐 Role-based access and permissions
- 📱 Fully responsive digital UI

The architecture follows a structured category hierarchy:

```text
Main
└── Sub
    └── Child
        └── Sub Child
```

---

# 🧠 System Architecture

```text
                    ┌─────────────────────────┐
                    │      DREAM CART BD      │
                    │     DIGITAL STORE       │
                    └────────────┬────────────┘
                                 │
              ┌──────────────────┼──────────────────┐
              │                  │                  │
              ▼                  ▼                  ▼
       Customer Portal     Reseller Portal   Wholesaler Portal
              │                  │                  │
              └──────────────────┼──────────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │     FRONTEND SYSTEM     │
                    │ HTML / CSS / JavaScript  │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │   GOOGLE APPS SCRIPT    │
                    │     API + BUSINESS LOGIC │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │     GOOGLE SHEETS       │
                    │      DATA SYSTEM        │
                    └─────────────────────────┘
```

---

# 🏗️ Core Technology

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, JavaScript |
| Data Store | Google Sheets |
| Backend / API | Google Apps Script |
| UI Components | Bootstrap, Bootstrap Icons |
| Icons | Font Awesome |
| Charts | Chart.js |
| Alerts | SweetAlert2 |
| Tables | DataTables |
| Hosting | GitHub / Cloudflare / cPanel |
| Responsive Targets | Mobile / Tablet / Laptop / Computer / TV |

---

# 🔗 Project Resources

### 👨‍💻 Developer

**Jainal Abedin**  
[Developer Profile](https://dcitbd.github.io/Jainal-Abedin/)

### 🏢 Organization

**CEO — Dream Career IT BD**  
[Dream Career IT BD](https://dcitbd.github.io/dcitbd/)

### 📊 Google Sheet

[Open Dream Cart BD Spreadsheet](https://docs.google.com/spreadsheets/d/1BGi8IXV6S7uXDi4IaR_sCJYhtpfzyLGuldo4NnGVmR8/edit?gid=2106627979#gid=2106627979)

### ⚡ Google Apps Script

[Open Apps Script Web App](https://script.google.com/macros/s/AKfycbwflHuBqMKWpKPTTVNY-grU_dnNphwELXbk6Hn-wcBjxJk4xvqScmT2n8i3ZQCStMI3/exec)

---

# 📚 Data System

The Google Spreadsheet is the central business-data system.

## 📦 Products

| Column | Field |
|---|---|
| A | SKU |
| B | P_Name |
| C | Category |
| D | Sub_Category |
| E | Child_Category |
| F | Brand |
| G | Buying_price |
| H | Selling_Price |
| I | Stock |
| J | Original_Price |
| K | WholeSale_price |
| L | Min_order_Q |
| M | Images |
| N | Slug |
| O | Description |
| P | Specification |
| Q | Others |
| R | Color |
| S | Size |
| T | WEIGHT_KG |
| U | WIDTH_CM |
| V | LENGTH_CM |
| W | HEIGHT_CM |

## 🗂️ Categories

```text
Catagory_ID
Catagory_Slug
Category_Image
Category
Sub_Category
Chail_Category
```

## 🏷️ Brands

```text
Brand_ID
Brand_Image
Brand_Name
Brand_Slug
Brand_Description
```

## 🛒 Orders

```text
Date
OrderID
Account_type
Customer_Name
Phone
Address
Products
Color
Size
Quantity
Total_Amount
Payment_method
Transaction_ID
Payment_Status
Order_Status
Reseller_Commission
Commission_Status
```

## 📝 Incomplete Orders

```text
Date
OrderID
Account_type
Customer_Name
Phone
Address
Products
Total_Amount
Status
```

## 👀 Viewers

```text
Time
IP
Address
Name
Phone
Device
Activity
```

## 👤 Customers

```text
USER_ID
Profile_photo
Name
Mobile
Mail
Address
User_ID
Password
Status
Success_order
Cancel_Order
Total_Order
Order_Success_Rate
```

## 🤝 Resellers

```text
Shop_ID
Shop_logo
Name
Mobile
Mail
Address
Shop_Name
NID_Number
Date_of_birth
Trade_Licence_No
User_ID
Password
Status
```

## 🏪 Wholesalers

```text
Shop_ID
Shop_logo
Name
Mobile
Mail
Address
Shop_Name
User_ID
Password
Status
```

## 🧾 Buying

```text
Date
Who Buy
Product Name
buying price
Quantity
Total buying (calculated)
Supplier
Location
```

## 💰 Costs

```text
Date
Who Paid
Purpose
Amount
Note
```

## 💵 Invest

```text
Date
Invest type
Name of investor
Amount
Note
```

## 🌐 Others Market

```text
Shop_ID
Market_Logo
Market_Name
Shop_Name
Shop_Link
Status
```

## 👨‍💼 Admin / Worker

```text
USER_ID
Profile_Photo
Name
Mobile
Mail
Address
Worker_Type
Role
User_Name
Password
```

## ⚙️ Settings

```text
Name
Details
Activation
```

---

# 🔄 Order Lifecycle

```text
Pending
   ↓
Order Placed
   ↓
Order Confirmed
   ↓
Processing
   ↓
Ready to Pack
   ↓
Packing
   ↓
Packed
   ↓
Ready to Ship
   ↓
Shipped
   ↓
In Transit
   ↓
Arrived at Hub
   ↓
Out for Delivery
   ↓
Delivered
```

Additional supported states include:

```text
Delivery Failed
Customer Unreachable
Customer Requested Delay
Rescheduled

Return Requested
Return Approved
Return Processing
Returned

Refund Requested
Refund Processing
Refunded

Exchange Requested
Exchange Approved
Exchange Processing
Exchanged

Cancel Requested
Cancelled

Payment Pending
Payment Confirmed
Payment Failed
Payment Refunded

On Hold
Fraud/Risk Review
Address Verification
Completed
```

---

# 💳 Payment System

Supported payment methods include:

```text
Cash On Delivery (COD)
Bkash Personal
Bkash Payment
Nagad Personal
Rocket Personal
Bank Account
Cash Payment
```

Payment statuses:

```text
Paid
Not Paid
Others
COD
```

---

# 🤝 Reseller Commission

```text
Paid
Not Paid
Pending
Rejected
```

---

# 👥 Account Types

## Customer

Customer features include:

- Login / Register
- Profile
- Dashboard
- Orders
- Cart
- Favourite products
- Settings
- Order tracking
- Voucher download
- Search and filtering

## Reseller

Reseller features include:

- Login / Register
- Profile
- Dashboard
- Payment dashboard
- Payment request
- Payment methods
- Sales & payment reports
- Reseller catalogue
- Reseller pricing
- Orders
- Cart
- Favourite products
- Settings

## Wholesaler

Wholesaler features include:

- Login / Register
- Profile
- Dashboard
- Wholesale catalogue
- Wholesale pricing
- Minimum-order-quantity enforcement
- Orders
- Cart
- Favourite products
- Settings

## Admin / Worker

Admin and workers receive configurable access based on worker type and role.

---

# 🛡️ Worker Types

```text
Admin
Manager
Staff
Sales
Customer Support
Order Management
Inventory/Warehouse
Delivery
Accountant
Marketing
IT/Technical
Content Manager
Other
```

---

# 🔐 Access Roles

```text
Full Access
Dashboard Management
Order Management
Product Management
Category Management
Brand Management
Inventory Management
Purchase Management
Customer Management
Reseller Management
Wholesaler Management
Payment Management
Delivery Management
Return & Refund Management
Review Management
Incomplete Order Management
Banner Management
Website Content Management
Marketing Management
Live Chat Management
Viewer Management
Report Management
Finance & Accounting Management
Investment Management
Cost Management
Worker Management
Admin Management
Settings Management
Data Management
System/IT Management
Read Only
Data Entry
Other
```

---

# 🛍️ Product Experience

Every product card is designed for a modern digital shopping experience.

```text
┌─────────────────────────────────────────┐
│              PRODUCT IMAGE              │
│           ❤️        DISCOUNT            │
├─────────────────────────────────────────┤
│ Brand Name + SKU                        │
│ Product Name                            │
│ Product Name                            │
├─────────────────────────────────────────┤
│ Selling Price     Original Price        │
│ Stock: XX pcs                           │
│                                         │
│ Minimum Order Quantity                  │
├─────────────────────────────────────────┤
│       [ ORDER NOW / PRE ORDER ]         │
│     🛒   ❤️   WhatsApp   WhatsApp       │
└─────────────────────────────────────────┘
```

Account-based pricing:

```text
Customer      → Selling Price
Reseller      → Reseller Price
Wholesaler    → Wholesale Price
```

When stock is unavailable:

```text
Out of Stock → PRE ORDER
```

When a wholesaler orders below the minimum quantity:

```text
Order blocked until minimum quantity is reached.
```

---

# 🧭 Main Navigation

Responsive navigation includes:

```text
Logo + Shop Name
Search
Products
Cart
Favourite
Customer Login
Dark Mode
```

The search system is designed to provide product previews while typing, with direct access to product details.

---

# 📱 Fixed Customer Actions

All customer / reseller / wholesaler pages support responsive fixed action buttons:

```text
Cart
WhatsApp
Call
Live Chat
```

WhatsApp contacts are supported through:

```text
01581703822
01818273838
```

---

# 🦶 Footer System

The footer contains:

```text
Logo
Shop Name
Slogan
Description
Social Icons

Pages
Page Links
Page Links

Shop Location
Contact
Office Time

Payment Methods

Developer
Terms
Privacy
Copyright
```

---

# 📄 Main Website Pages

```text
1.  Home
2.  Products
3.  Cart
4.  Favourite
5.  Order Form
6.  Order Success
7.  Product Details
8.  Live Chat
9.  All Categories
10. All Brands
11. Others Market
12. Tracking
13. Terms & Condition
14. Privacy Policy
15. Customer Login/Register
16. Reseller Login/Register
17. Wholesaler Login/Register
18. Admin/Worker Login
```

---

# 🏠 Home Page

The homepage supports:

- Notice bar
- Responsive navigation
- Auto-sliding banners
- Unlimited banner management
- Extra notice/opportunity cards
- Brand cards
- Category-based product sections
- Responsive footer

---

# 🛒 Products Page

Features:

```text
60 products per page
Category filter
Sub-category filter
Child-category filter
Stock filter
Brand filter
Low → High price
High → Low price
Responsive product cards
```

---

# 📦 Checkout & Order System

The order form supports:

```text
Customer Information
Payment Type
Delivery Area
Delivery Charge
Offer Calculation
Online Payment Discount
Product Details
Quantity Update
Total Amount
Order Confirmation
```

The order-success page provides:

```text
Order ID
Order Summary
Success Card
WhatsApp Reminder
Print
Download
```

---

# 📡 Tracking

The platform includes a dedicated order-tracking experience based around order information and order IDs.

---

# 💬 Live Chat

The live-chat system is designed to provide product and contact information through a dedicated customer communication page.

---

# 🎯 Landing Page System

Landing pages can be created and managed from the admin panel.

Supported fields include:

```text
Slug
Slogan
Visit Website Link
Selected Products
Product Review Images
Customer Review Images
Call Contact
WhatsApp Contact
Mail Contact
Social Icons
```

---

# 🎟️ Digital Voucher

The voucher design can contain:

```text
Customer Information
Shop Information
Logo
Logo Watermark
Barcode
Order Information
Payment Information
Slogan
Thank You Message
```

---

# 🎨 UI / UX Philosophy

The complete interface should follow a modern **awesome + digital + professional** visual language.

Core UI principles:

```text
Modern Cards
Smooth Hover Effects
Responsive Layouts
Digital Statistics
Clean Typography
Clear Status Indicators
Professional Forms
Interactive Modals
Toast Notifications
Dark Mode
Print-Friendly Layouts
Mobile-First Responsiveness
```

All:

```text
Messages
Errors
Notifications
Forms
Cards
Tables
Buttons
Modals
Dashboard Components
```

should use a polished digital CSS design.

---

# 📊 Admin Dashboard

The admin dashboard provides complete business visibility.

Dashboard areas include:

```text
Business Summary
Recent Orders
Pending Orders
Graphs
Weekly Sales
Sales Maps
```

---

# 🧰 Product Management

Admin functionality includes:

```text
Product List
Add Product
Bulk Add Product
Bulk Price Update
Export Product
Product View
Inline Price Editing
Inline Stock Editing
Bulk Delete
Delete
Edit
Activate / Deactivate
Search
Filter
Counter Cards
Print
CSV
PDF
Excel
```

Product creation supports:

```text
Computer Image Upload
Image Link
Google Sheet Data
```

---

# 🗂️ Category Management

Category management follows the hierarchical structure:

```text
Category
└── Sub Category
    └── Child Category
```

Category interface supports:

```text
Category Tree
Search
Filter
Add Category
Add Sub Category
Add Child Category
Automatic Category ID
Automatic Category Slug
Image
```

---

# 🖼️ Banner Management

```text
Banner List
Counter Cards
Filter
Search
Edit
Delete
Move Up / Down
Add Banner
```

---

# 📦 Order Management

Admin order management includes:

```text
Order List
Incomplete Orders
Pre Orders
Returned Orders
Unpaid Orders
In-Courier Orders
Success Orders
Live Viewers
Reviews
```

Each order can provide:

```text
Order ID
Order Type
Customer
Phone
Address
Product
Color
Size
Quantity
Price
Reseller Commission
Commission Status
Payment Method
Transaction ID
Payment Status
Order Status
Actions
```

---

# 👤 Customer Management

```text
Customer List
Add Customer
Search
Filter
Counter Cards
Bulk Delete
Delete
Edit
Activate / Deactivate
Export
Print
CSV
PDF
```

---

# 🤝 Reseller Management

```text
Reseller List
Add Reseller
Search
Filter
Counter Cards
Bulk Delete
Delete
Edit
Activate / Deactivate
Export
Print
CSV
PDF
```

---

# 🏪 Wholesaler Management

```text
Wholesaler List
Add Wholesaler
Search
Filter
Counter Cards
Bulk Delete
Delete
Edit
Activate / Deactivate
Export
Print
CSV
PDF
```

---

# 💰 Reseller Payment Management

Reseller payment requests support:

```text
Request ID
Reseller ID
Reseller Name
Payment Method
Amount
Amount - 3%
Status
Action
```

Payment methods support:

```text
Bkash
Nagad
Rocket
Bank
Upay
QR
```

---

# 📈 Reports

## Sales Reports

```text
Sales Report
Product Report
Best Sale
Most Popular
Unpopular
```

## Customer Reports

```text
Fraud Customer
Verified Customer
Gold Customer
```

## Reseller Reports

```text
Fraud Reseller
Verified Reseller
Top Ordered / Gold Reseller
Reseller Report by Person
```

## Wholesaler Reports

```text
Fraud Wholesaler
Verified Wholesaler
Gold / Top Ordered Wholesaler
Wholesaler Report by Person
```

Supported outputs include:

```text
Download
Print
PDF
CSV
```

---

# 🧾 Worker Logs

The system supports worker activity/log management through the admin environment.

---

# ⚙️ Site Settings

The admin can manage:

```text
Logo
Shop Name
Shop Address
Shop Phone
Shop Email
Payment Methods
Office Time
Delivery Methods
Delivery Fees
Offers
Notices
```

Delivery fee configuration supports editable delivery methods including:

```text
In Dhaka
In Cumilla
Out of Dhaka
Office Pickup
```

Offers and notices are configurable and can be activated or deactivated from the admin panel.

---

# 📢 Current Offer Logic

The planned offer system supports:

```text
৳2,000+ Shopping
→ Free Delivery
```

```text
Online Payment
→ 5% Discount
```

These values remain editable through the settings system.

---

# 🗺️ Complete Project Structure

<details>
<summary><strong>📁 Expand Project Structure</strong></summary>

```text
dream-cart-bd/
│
├── index.html
├── products.html
├── cart.html
├── favourite.html
├── order.html
├── order-success.html
├── product-details.html
├── live-chat.html
├── categories.html
├── brands.html
├── others-market.html
├── tracking.html
├── terms.html
├── privacy.html
├── login.html
├── register.html
│
├── 404.html
├── robots.txt
├── sitemap.xml
├── CNAME
├── _redirects
├── _headers
├── .htaccess
│
├── customer/
│   ├── index.html
│   ├── dashboard.html
│   ├── profile.html
│   ├── orders.html
│   ├── cart.html
│   ├── favourite.html
│   └── settings.html
│
├── reseller/
│   ├── login.html
│   ├── register.html
│   ├── index.html
│   ├── dashboard.html
│   ├── profile.html
│   ├── payments.html
│   ├── payment-methods.html
│   ├── sales-report.html
│   ├── catalogue.html
│   ├── orders.html
│   ├── cart.html
│   ├── favourite.html
│   └── settings.html
│
├── wholesaler/
│   ├── login.html
│   ├── register.html
│   ├── index.html
│   ├── dashboard.html
│   ├── profile.html
│   ├── catalogue.html
│   ├── orders.html
│   ├── cart.html
│   ├── favourite.html
│   └── settings.html
│
├── admin/
│   ├── login.html
│   ├── dashboard.html
│   │
│   ├── products/
│   │   ├── index.html
│   │   ├── add.html
│   │   ├── bulk-add.html
│   │   ├── bulk-price-update.html
│   │   ├── export.html
│   │   └── view.html
│   │
│   ├── brands/
│   │   ├── index.html
│   │   └── add.html
│   │
│   ├── categories/
│   │   ├── index.html
│   │   ├── add-category.html
│   │   ├── add-sub-category.html
│   │   └── add-child-category.html
│   │
│   ├── banners/
│   │   ├── index.html
│   │   └── add.html
│   │
│   ├── orders/
│   │   ├── index.html
│   │   ├── add.html
│   │   ├── incomplete.html
│   │   ├── pre-orders.html
│   │   ├── returned.html
│   │   ├── unpaid.html
│   │   ├── in-courier.html
│   │   ├── success.html
│   │   ├── viewers.html
│   │   └── reviews.html
│   │
│   ├── customers/
│   │   ├── index.html
│   │   └── add.html
│   │
│   ├── resellers/
│   │   ├── index.html
│   │   └── add.html
│   │
│   ├── wholesalers/
│   │   ├── index.html
│   │   └── add.html
│   │
│   ├── payments/
│   │   └── reseller-requests.html
│   │
│   ├── landing-pages/
│   │   ├── index.html
│   │   ├── add.html
│   │   └── view.html
│   │
│   ├── reports/
│   │   ├── sales.html
│   │   ├── products/
│   │   │   ├── best-sale.html
│   │   │   ├── most-popular.html
│   │   │   └── unpopular.html
│   │   ├── customers/
│   │   │   ├── fraud.html
│   │   │   ├── verified.html
│   │   │   └── gold.html
│   │   ├── resellers/
│   │   │   ├── fraud.html
│   │   │   ├── verified.html
│   │   │   ├── gold.html
│   │   │   └── person.html
│   │   └── wholesalers/
│   │       ├── fraud.html
│   │       ├── verified.html
│   │       ├── gold.html
│   │       └── person.html
│   │
│   ├── logs/
│   │   └── worker-logs.html
│   │
│   └── settings/
│       ├── site.html
│       ├── payment-methods.html
│       ├── delivery-fees.html
│       ├── offers.html
│       └── notices.html
│
├── assets/
│   ├── css/
│   │   ├── reset.css
│   │   ├── variables.css
│   │   ├── main.css
│   │   ├── theme.css
│   │   ├── components.css
│   │   ├── navbar.css
│   │   ├── footer.css
│   │   ├── product-card.css
│   │   ├── dashboard.css
│   │   ├── admin.css
│   │   ├── forms.css
│   │   ├── modal.css
│   │   ├── notification.css
│   │   ├── chat.css
│   │   ├── voucher.css
│   │   ├── animation.css
│   │   ├── responsive.css
│   │   ├── print.css
│   │   └── utilities.css
│   │
│   ├── js/
│   │   ├── core/
│   │   │   ├── config.js
│   │   │   ├── api.js
│   │   │   ├── auth.js
│   │   │   ├── permissions.js
│   │   │   ├── state.js
│   │   │   ├── storage.js
│   │   │   ├── validators.js
│   │   │   ├── router.js
│   │   │   └── security.js
│   │   │
│   │   ├── components/
│   │   │   ├── navbar.js
│   │   │   ├── footer.js
│   │   │   ├── notice-bar.js
│   │   │   ├── search.js
│   │   │   ├── product-card.js
│   │   │   ├── filters.js
│   │   │   ├── modal.js
│   │   │   ├── toast.js
│   │   │   ├── pagination.js
│   │   │   ├── counter-card.js
│   │   │   └── table.js
│   │   │
│   │   ├── shop/
│   │   │   ├── products.js
│   │   │   ├── product-details.js
│   │   │   ├── categories.js
│   │   │   ├── brands.js
│   │   │   ├── cart.js
│   │   │   ├── favourite.js
│   │   │   ├── checkout.js
│   │   │   ├── order.js
│   │   │   ├── tracking.js
│   │   │   ├── live-chat.js
│   │   │   ├── voucher.js
│   │   │   └── landing-page.js
│   │   │
│   │   ├── customer/
│   │   │   ├── dashboard.js
│   │   │   ├── profile.js
│   │   │   ├── orders.js
│   │   │   ├── cart.js
│   │   │   ├── favourite.js
│   │   │   └── settings.js
│   │   │
│   │   ├── reseller/
│   │   │   ├── dashboard.js
│   │   │   ├── payments.js
│   │   │   ├── payment-methods.js
│   │   │   ├── catalogue.js
│   │   │   ├── orders.js
│   │   │   ├── sales-report.js
│   │   │   └── settings.js
│   │   │
│   │   ├── wholesaler/
│   │   │   ├── dashboard.js
│   │   │   ├── catalogue.js
│   │   │   ├── orders.js
│   │   │   ├── cart.js
│   │   │   ├── favourite.js
│   │   │   └── settings.js
│   │   │
│   │   └── admin/
│   │       ├── dashboard.js
│   │       ├── products.js
│   │       ├── brands.js
│   │       ├── categories.js
│   │       ├── banners.js
│   │       ├── orders.js
│   │       ├── reviews.js
│   │       ├── customers.js
│   │       ├── resellers.js
│   │       ├── wholesalers.js
│   │       ├── payments.js
│   │       ├── landing-pages.js
│   │       ├── reports.js
│   │       ├── worker-logs.js
│   │       └── settings.js
│   │
│   ├── images/
│   │   ├── logo/
│   │   ├── banners/
│   │   ├── products/
│   │   ├── categories/
│   │   ├── brands/
│   │   └── reviews/
│   │
│   └── vendor/
│       ├── bootstrap/
│       ├── bootstrap-icons/
│       ├── fontawesome/
│       ├── chartjs/
│       ├── sweetalert2/
│       └── datatables/
│
└── appsscript/
    ├── Code.gs
    ├── Config.gs
    ├── Utils.gs
    ├── Auth.gs
    ├── Products.gs
    ├── Categories.gs
    ├── Brands.gs
    ├── Orders.gs
    ├── IncompleteOrders.gs
    ├── Viewers.gs
    ├── Customers.gs
    ├── Resellers.gs
    ├── Wholesalers.gs
    ├── Buying.gs
    ├── Costs.gs
    ├── Invest.gs
    ├── OthersMarket.gs
    ├── Banners.gs
    ├── Reviews.gs
    ├── Payments.gs
    ├── LandingPages.gs
    ├── WorkerLogs.gs
    ├── Reports.gs
    ├── Settings.gs
    ├── MissingSheetsSetup.gs
    ├── Api.gs
    ├── Response.gs
    ├── Validation.gs
    ├── Security.gs
    └── appsscript.json
```

</details>

---

# ⚡ Google Apps Script Modules

The backend is organized into dedicated modules:

```text
Code.gs
Config.gs
Utils.gs
Auth.gs
Products.gs
Categories.gs
Brands.gs
Orders.gs
IncompleteOrders.gs
Viewers.gs
Customers.gs
Resellers.gs
Wholesalers.gs
Buying.gs
Costs.gs
Invest.gs
OthersMarket.gs
Banners.gs
Reviews.gs
Payments.gs
LandingPages.gs
WorkerLogs.gs
Reports.gs
Settings.gs
MissingSheetsSetup.gs
Api.gs
Response.gs
Validation.gs
Security.gs
appsscript.json
```

This separation keeps the system modular and easier to maintain.

---

# 🔌 API & Business Flow

```text
Frontend
   │
   ▼
API Request
   │
   ▼
Google Apps Script
   │
   ├── Authentication
   ├── Validation
   ├── Security
   ├── Business Logic
   ├── Permission Check
   └── Response Handling
   │
   ▼
Google Sheets
   │
   ▼
Structured Response
   │
   ▼
Frontend UI
```

---

# 🔐 Security Architecture

Core security modules include:

```text
Auth.js
Permissions.js
Security.js
Validation.js
```

The system is designed to separate:

```text
Authentication
Authorization
Validation
Business Logic
Data Access
Response Handling
```

---

# 📱 Responsive Design

The UI is designed to work across:

```text
📱 Mobile
📲 Tablet
💻 Laptop
🖥️ Desktop
📺 TV
```

Responsive styling is centralized through:

```text
responsive.css
```

---

# 🌙 Digital UI System

The platform includes:

```text
Dark Mode
Animations
Hover Effects
Cards
Toast Notifications
Modals
Counters
Data Tables
Responsive Forms
Print Styles
Utilities
```

Core CSS modules:

```text
reset.css
variables.css
main.css
theme.css
components.css
navbar.css
footer.css
product-card.css
dashboard.css
admin.css
forms.css
modal.css
notification.css
chat.css
voucher.css
animation.css
responsive.css
print.css
utilities.css
```

---

# 🚀 Deployment

The project structure is designed to support:

```text
GitHub
Cloudflare
cPanel
```

Required deployment files include:

```text
CNAME
_redirects
_headers
.htaccess
robots.txt
sitemap.xml
```

---

# 🧪 Development Principles

The project follows these rules:

```text
✅ Use the defined spreadsheet structure
✅ Keep the planned file paths
✅ Keep the module separation
✅ Maintain responsive design
✅ Maintain role-based access
✅ Keep Google Sheets as the structured data source
✅ Use Google Apps Script for API/business operations
✅ Avoid demo product data
✅ Maintain the planned workflow
✅ Keep admin/customer/reseller/wholesaler systems separate
```

---

# 🚫 No Demo Product Data

The platform is designed to use the real Google Sheet data structure.

```text
NO DEMO PRODUCTS
NO RANDOM SAMPLE PRODUCTS
NO UNPLANNED DATA STRUCTURE
```

---

# 🏁 Project Identity

```text
PROJECT
Dream Cart BD

DEVELOPER
Jainal Abedin

ORGANIZATION
Dream Career IT BD

ARCHITECTURE
Google Sheets + Google Apps Script + HTML/CSS/JavaScript

STYLE
Strong • Modern • Digital • Responsive • Professional
```

---

# 💎 Design Philosophy

> **Build it like a real digital commerce system — not just a website.**

The goal is to create a connected ecosystem where:

```text
Customers
     ↕
Products
     ↕
Orders
     ↕
Resellers
     ↕
Wholesalers
     ↕
Admin / Workers
     ↕
Reports / Finance / Settings
     ↕
Google Sheets
```

all operate through one structured digital system.

---

# 📌 Project Status

**Architecture & Development Specification**

This README describes the planned Dream Cart BD digital commerce system, its data structure, user roles, interfaces, modules, and project organization.

---

<p align="center">
  <strong>Dream Cart BD</strong><br>
  <sub>Digital Commerce • Smart Management • Structured Data • Modern Experience</sub>
</p>

<p align="center">
  <strong>Developed by Jainal Abedin</strong><br>
  <a href="https://dcitbd.github.io/Jainal-Abedin/">dcitbd.github.io/Jainal-Abedin</a>
</p>