import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <section id="contact">
      <div className="newsletter-container">
        <h1 className="newsletter-title">Subscribe To Our Newsletter</h1>
        <p className="newsletter-subtitle">And Never Miss Latest Updates!</p>
        <div className="newsletter-input-container">
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
          />
          <button className="newsletter-button">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
