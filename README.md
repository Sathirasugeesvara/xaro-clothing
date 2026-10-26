<div align="center">

# 🛍️ XARO CLOTHING

### 🚀 Modern React-Based Clothing E-Commerce Platform

🔗 Live Demo:
https://sathirasugeesvara.github.io/xaro-clothing/

---

</div>

---

## 🚀 Project Overview

**XARO Clothing** is a modern e-commerce web application built using **React + Vite + TypeScript**, designed with a clean UI and smooth user experience.

This project demonstrates a **real-world frontend architecture** by integrating third-party services instead of a traditional backend.

---

## 🧠 System Architecture

* 📊 **Google Sheets** → Acts as a lightweight database
* 🔗 **Google Sheets CSV export** → Serves the public product catalog directly
* ☁️ **Cloudinary** → Stores and delivers product images
* ⚛️ **React** → Handles UI rendering and state management

---

## 📦 Product Data Management

* Created and managed product database using **Google Sheets**
* Stored product details:

  * Name
  * Price
  * Stock
  * Category
  * Sizes
  * Image URL
* Dynamically fetched data from the public **Google Sheets CSV export**

---

## 🖼️ Image Handling

* Uploaded product images to **Cloudinary**
* Stored only image URLs in Google Sheets
* Rendered images dynamically in React using CDN links

---

## ⚙️ Frontend Features

* 🛍️ Dynamic product listing page
* 🔍 Search & filter products by category
* 📄 Product detail page (`/product/:id`)
* ❤️ Wishlist UI (like button)
* 📱 Fully responsive design
* ⚡ Smooth animations & modern UI
* 📡 Live API data fetching

---

## 💡 Key Implementations

* Used `fetch()` to integrate REST API
* Implemented dynamic routing using React Router
* Built reusable components (Navbar, Card, Footer)
* Added loading skeleton UI for better UX
* Implemented WhatsApp-based ordering system

To connect the catalog, make the product spreadsheet viewable by anyone with the
link and set its CSV export URL in `src/config.ts`. Keep the required `id`,
`name`, `price`, and `image` columns in the first sheet; optional columns include
`description`, `sizes`, `stock`, `category`, `image2`, and `image3`.

---

## 📲 Ordering System

* Orders are handled via **WhatsApp integration**
* Automatically generates order message with:

  * Product name
  * Selected size
  * Quantity
  * Price
  * Product link

---

## 🎯 Project Goal

To build a **scalable, modern e-commerce frontend** without a traditional backend by using cloud services and APIs.

---

## 👨‍💻 Developer

**Sathira**
📍 Sri Lanka
💻 Self-taught Full Stack Developer

---

## ⚠️ Note

This project is actively being improved.
Upcoming features:

* 🛒 Add to Cart system
* 👤 User Authentication
* 🧾 Checkout system
* 🧠 Backend (Node.js + Express + MongoDB)

---

## 🚀 Future Improvements

* Replace SheetDB with full backend (MERN)
* Add payment gateway integration
* Improve performance & SEO
* Add admin dashboard

---

## 🙌 Support

If you like this project, feel free to ⭐ the repo and share!

---
