import React from 'react';
import './Navbar.css'; // Import your CSS file
import './Footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <div>
      <nav className="navbar" id="navbar">
        <div className="logo">
          <span>Harsha Vardhan Reddy</span>
        </div>

      
        <div className="links">
          <ul className="nav-links">
            
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#contact" className="Contact">Contact</a></li>
          </ul>
        </div>
        
      </nav>
      {/* <footer className="footer">
        <p>&copy; 2023 Harsha's Portfolio</p>
      </footer> */}
    </div>
  );
};

export default Footer;
