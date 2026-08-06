const faqs = [
  {
    q: "How long does delivery take?",
    a: "Colombo & suburbs: 1–2 working days. Other areas islandwide: 2–4 working days.",
  },
  {
    q: "Do you offer Cash on Delivery?",
    a: "Yes — pay in cash when your order reaches your doorstep. Please have the exact amount ready.",
  },
  {
    q: "How do I know my size?",
    a: "Check our Size Guide page for a full measurement chart, or message us your measurements on WhatsApp and we'll help you pick.",
  },
  {
    q: "Can I exchange or return an item?",
    a: "Yes, exchanges are accepted within 7 days if the item is unused, unwashed, and in its original packaging. Message us on WhatsApp to arrange it.",
  },
  {
    q: "How do I place an order?",
    a: "Add items to your cart (or order a single item directly) and tap checkout — it opens WhatsApp with your order details filled in. Confirm with us there.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Cash on Delivery for now. Any other payment options will be confirmed with you directly over WhatsApp.",
  },
];

const FAQ = () => {
  return (
    <div className="shipping-page">
      <div className="shipping-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Everything you need to know before you order</p>
      </div>

      <div className="shipping-section">
        {faqs.map((item, i) => (
          <div key={i} className="faq-item">
            <h2>{item.q}</h2>
            <p>{item.a}</p>
          </div>
        ))}
      </div>

      <br /><br /><br />
    </div>
  );
};

export default FAQ;
