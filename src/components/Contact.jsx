// Contact.js
import React from 'react';
import './Contact.css';
import 'font-awesome/css/font-awesome.min.css';
import {
  FaEnvelope,
  FaPhone,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
// import { Email, GitHub, LinkedIn,Phone } from "@mui/icons-material";
// import TwitterIcon from "@mui/icons-material/Twitter";


const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <div className='buttons'>
        
        <h2>Contact Me</h2>
        <h4>If Any Oppurtunities or Suggestions. I am just a Click Away From You.</h4>
        
        <div className="input-container">
            <a href="mailto:kunareddyharshareddy@gmail.com" target="_blank" rel="noopener noreferrer">
              {/* <p><i className="fas fa-envelope"></i></p> */}
              <h1>
              <FaEnvelope />
              </h1>
              <h1>Mail Me</h1>
            </a>
          </div>

          <div className="input-container">
            <a href="tel:+918639336964" target="_blank" rel="noopener noreferrer">
              
              {/* <h1><i className="fas fa-phone"></i></h1> */}
              <h1>
                <FaPhone />
              </h1>
              <h1>Call Me</h1>
            </a>
          </div>

          <div className="input-container">
            <a href="https://github.com/Harshakunareddy/" target="_blank" rel="noopener noreferrer">
              {/* <h1><i className="fab fa-github"></i></h1> */}
              <h1>
              <FaGithub />
              </h1>
              <h1>Github</h1>
            </a>
          </div>

          <div className="input-container">
            <a href="https://www.linkedin.com/in/harshavardhan-reddy-kunareddy-63b0b61bb" target="_blank" rel="noopener noreferrer">
              
              {/* <h1><i className="fab fa-linkedin-in"></i></h1> */}
              <h1>
              <FaLinkedin></FaLinkedin>
              </h1>
              
              <h1>Linkedin</h1>
            </a>
          </div>

          <div className="input-container">
            <a href="https://twitter.com/Harsha_AppDev" target="_blank" rel="noopener noreferrer">
              
              {/* <h1><i className="fab fa-twitter"></i></h1> */}
              <h1>
  
                <FaTwitter />

              </h1>
              <h1>Twitter</h1>
            </a>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Contact;
