// 🔧 SHOP CONFIG — this is the ONLY file you need to touch when reusing
// this template for a new client. Change the values below and the whole
// site (WhatsApp number, sheet, socials, branding text) updates.

const config = {
  shopName: "XARO",
  shopNameFull: "XARO®",
  tagline: "Your trusted clothing destination for modern styles and timeless fashion.",

  // International format, digits only, no "+" or spaces
  whatsappNumber: "94762316799",

  // Optional pre-made WhatsApp "click to chat" business link (from WA Business app).
  // Leave as "" if the client doesn't have one — code falls back to whatsappNumber.
  whatsappShortLink: "",

  email: "xaroclothing@gmail.com",

  // Public Google Sheet CSV export that powers the product catalog
  productSheetCsvUrl:
    "https://docs.google.com/spreadsheets/d/1gQl3n9nTHleT8va6Lkve-vb-5Zse44dI1mVONNHiSzU/export?format=csv",

  social: {
    facebook: "https://www.facebook.com/xaro.clothing",
    instagram: "https://www.instagram.com/xaro_clothing",
    tiktok: "https://www.tiktok.com/@xaro_clothing",
  },

  location: "Sri Lanka",

  // Shown as small trust badges near the order button on product pages.
  trustBadges: [
    "Cash on Delivery available",
    "Verified seller",
    "Island-wide delivery",
  ],

  // Analytics — leave empty ("") to disable. Fill in once the shop has
  // their own GA4 property / Meta Pixel, don't reuse someone else's.
  analytics: {
    googleAnalyticsId: "", // e.g. "G-XXXXXXXXXX"
    metaPixelId: "", // e.g. "1234567890123456"
  },

  // Manually curated Instagram highlights for the homepage. Instagram embeds
  // need server-side token refresh, so this list is updated by hand instead. Each links out to the real post.
  instagramPosts: [
    { image: "", link: "https://www.instagram.com/xaro_clothing" },
    { image: "", link: "https://www.instagram.com/xaro_clothing" },
    { image: "", link: "https://www.instagram.com/xaro_clothing" },
    { image: "", link: "https://www.instagram.com/xaro_clothing" },
  ],
};

export default config;

// Build a WhatsApp deep link with a pre-filled message
export const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
