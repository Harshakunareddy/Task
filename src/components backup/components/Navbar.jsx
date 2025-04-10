import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <nav className="navbar">
      <div className="logo">
        <span>Harsha</span>
      </div>
      <div className={`menu ${showMenu ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>
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
