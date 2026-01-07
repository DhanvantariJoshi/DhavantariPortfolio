import React from "react";
import "../CssComponent/Contact.css";

const Contact = () => {
  return (
    <section className="section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <h1 className="contact-hero-title">Let's Build Something Great</h1>
          <p className="contact-subtitle">
            Open to exciting opportunities and collaborations. 
            Reach out and let's discuss your next project.
          </p>
        </div>

        <div className="contact-stack">
          <a href="mailto:your.email@example.com" className="contact-card" target="_blank">
            <div className="contact-card-content">
              <div className="contact-icon">✉️</div>
              <div className="contact-info">
                <h4>Email Me</h4>
                <p className="contact-link">ddjsonkhed@gmail.com</p>
              </div>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/dhanvantari-joshi-489035199" className="contact-card" target="_blank" rel="noopener noreferrer">
            <div className="contact-card-content">
              <div className="contact-icon">💼</div>
              <div className="contact-info">
                <h4>LinkedIn</h4>
                <p className="contact-link">linkedin.com/in/Dhanvantariprofile</p>
              </div>
            </div>
          </a>

          <a href="https://github.com/DhanvantariJoshi" className="contact-card" target="_blank" rel="noopener noreferrer">
            <div className="contact-card-content">
              <div className="contact-icon">📂</div>
              <div className="contact-info">
                <h4>GitHub</h4>
                <p className="contact-link">github.com/DhanvantariJoshi</p>
              </div>
            </div>
          </a>
        </div>

        <div className="contact-cta">
          <a href="ddjsonkhed@gmail.com" className="cta-button cta-primary">
            📧 Start Email Conversation
          </a>
          <a href="https://www.linkedin.com/in/dhanvantari-joshi-489035199" className="cta-button cta-secondary" target="_blank">
            💼 Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
