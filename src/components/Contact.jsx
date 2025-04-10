import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const contacts = [
  {
    name: "Mail Me",
    icon: <FaEnvelope />,
    link: "mailto:kunareddyharshareddy@gmail.com",
  },
  {
    name: "Call Me",
    icon: <FaPhone />,
    link: "tel:+918639336964",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/Harshakunareddy/",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/harshavardhan-reddy-kunareddy-63b0b61bb",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    link: "https://twitter.com/Harsha_AppDev",
  },
];

const Contact = () => {
  return (
    <motion.section
      className="contact-section"
      id="contact"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }} // Triggers when 20% of section is visible
    >
      <div className="contact-content">
        {/* Title Animation */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          If you have any opportunities or suggestions, I am just a click away!
        </motion.p>

        {/* Contact Buttons */}
        <motion.div
          className="buttons"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              className="contact-item"
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(0, 194, 255, 0.8)" }}
              whileTap={{ scale: 0.9 }}
            >
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                <span className="icon">{contact.icon}</span>
                <h3>{contact.name}</h3>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
