import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleMenuOff = () => {
    setShowMenu(false);
  };


  return (
    <nav className="navbar">
      <div className="logo">
        <a href='/'>Harsha Vardhan</a>
      </div>
      <div className={`menu ${showMenu ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><a href="#contact" onClick={toggleMenuOff}>Hire Me</a></li>
          
          <li><a href="#skills" onClick={toggleMenuOff}>Skills</a></li>
          <li><a href="#projects" onClick={toggleMenuOff}>Projects</a></li>
          <li><a href="#certificates" onClick={toggleMenuOff}>Certificates</a></li>
          <li><a href="#contact" onClick={toggleMenuOff}>Contact</a></li>
          <li>
            <a 
              href="https://wa.me/918639336964" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={toggleMenuOff}
            >
              WhatsApp Me
            </a>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${showMenu ? 'open' : ''}`}></div>
        <div className={`bar ${showMenu ? 'open' : ''}`}></div>
        <div className={`bar ${showMenu ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
