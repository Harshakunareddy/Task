import React from 'react';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <span>MyLogo</span>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <footer className="footer">
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  );
};

export default Footer;
