// 🔧 SHOP CONFIG — this is the ONLY file you need to touch when reusing
// this template for a new client. Change the values below and the whole
// site (WhatsApp number, sheet, socials, branding text) updates.

const config = {
  shopName: "XARO",
  shopNameFull: "XARO®",
  tagline: "Your trusted clothing destination for modern styles and timeless fashion.",

  // International format, digits only, no "+" or spaces
  whatsappNumber: "94784627089",

  // Optional pre-made WhatsApp "click to chat" business link (from WA Business app).
  // Leave as "" if the client doesn't have one — code falls back to whatsappNumber.
  whatsappShortLink: "https://wa.me/message/DEHJ54C7PHAQN1",

  email: "xaroclothing@gmail.com",

  // Google Sheet (via SheetDB) that powers the product catalog
  sheetDbUrl: "https://sheetdb.io/api/v1/0d9w4d1lmz6b1",

  social: {
    facebook: "https://www.facebook.com/xaro.clothing",
    instagram: "https://www.instagram.com/xaro_clothing",
    tiktok: "https://www.tiktok.com/@xaro_clothing",
  },

  location: "Sri Lanka",
};

export default config;

// Build a WhatsApp deep link with a pre-filled message
export const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
