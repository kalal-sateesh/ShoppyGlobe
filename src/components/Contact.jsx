function Contact() {
  return (
    <div
      className="aboutTextContainer"
      style={{ backgroundColor: "white", padding: "10px", marginTop: "100px" }}
    >
      We’re here to help! At ShoppyGlobe, customer satisfaction is our top
      priority, and we’re always ready to assist with any inquiries, feedback,
      or issues you may have. Whether you need help with an order, have
      questions about a product, or just want to share your thoughts, our team
      is available and eager to support you.
      <div style={{ fontSize: "20px", fontWeight: "bold" }}>
        How to Reach Us
      </div>
      <div style={{ fontSize: "18px", fontWeight: "semibold" }}>
        {" "}
        Customer Support:{" "}
      </div>
      For questions about your orders, shipping, returns, or any other general
      inquiries, please feel free to get in touch with our customer support
      team.
      <ul>
        <li>Email: support@shoppyglobe.com</li>
        <li>Phone: +91 ********** (Available 24/7)</li>
      </ul>
    </div>
  );
}

export default Contact;
