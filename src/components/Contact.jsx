// Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me with any questions or opportunities. I'll get back to you as soon as possible.</p>
        <form>
          <div className="input-container">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>

          <div className="input-container">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your email" required />
          </div>

          <div className="input-container">
            <label for="message">Message:</label>
            <textarea id="message" name="message" placeholder="Your message" required></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
