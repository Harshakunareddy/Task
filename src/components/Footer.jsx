import React from "react";
import "./Footer.css";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Me Section */}
        <div className="footer-section">
          <h2>About Me</h2>
          <p>
            I'm a Full-Stack Software Developer with great experience in Development, passionate about building scalable applications. 
            Currently seeking new job opportunities in tech-driven companies.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section contact">
          <h2>Contact</h2>
          <p>
            <a href="mailto:kunareddyharshareddy@gmail.com">
              <FaEnvelope /> kunareddyharshareddy@gmail.com
            </a>
          </p>

          <p>
            <a href="tel:+918639336964">
              <FaPhone /> +91 8639336964
            </a>
          </p>

          <div className="social-icons">
            <a href="https://github.com/Harshakunareddy" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/harshavardhan-reddy-kunareddy-63b0b61bb" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com/Harsha_AppDev" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
