import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.css";
import profile from "../photos/profile.jpeg";
// import profile from "../photos/harsha.jfif";

import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const About = () => {
  const [projects, setProjects] = useState(0);
  const [startups, setStartups] = useState(0);
  const [clients, setClients] = useState(0);

  // Function to animate counters
  useEffect(() => {
    const animateNumber = (setter, finalValue) => {
      let count = 0;
      const interval = setInterval(() => {
        count += 1;
        setter(count);
        if (count >= finalValue) clearInterval(interval);
      }, 50);
    };

    animateNumber(setProjects, 10);
    animateNumber(setStartups, 4);
    animateNumber(setClients, 9);
  }, []);

  return (
    <section className="about-section">
      <div className="content-container">
        {/* Left Section */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="role">Software Developer</h2>
          <h1 className="hello">
            Hello, I'm <span className="highlight">Harsha Vardhan</span>
          </h1>
          <p className="description">
            I'm a full-stack developer with experience in <b style={{ color: "#fff" }}>MERN Stack</b>, <b style={{ color: "#fff" }}>Laravel</b>, and <b style={{ color: "#fff" }}>React Native</b>.
            Passionate about building efficient, scalable web and mobile applications with clean code practices.
          </p>
          <div className="links">
            <a href="https://www.linkedin.com/in/harshavardhan-reddy-kunareddy-63b0b61bb" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Harshakunareddy" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://twitter.com/Harsha_AppDev" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>

          {/* Animated Counter Section */}
          <div className="stats-container">
            <motion.div
              className="stat-box"
              whileHover={{ scale: 1.1 }}
            >
              <div className="stat-number">{projects}</div>
              <div className="stat-label">Projects Done</div>
            </motion.div>

            <motion.div
              className="stat-box"
              whileHover={{ scale: 1.1 }}
            >
              <div className="stat-number">{startups}</div>
              <div className="stat-label">Worked in Startups</div>
            </motion.div>

            <motion.div
              className="stat-box"
              whileHover={{ scale: 1.1 }}
            >
              <div className="stat-number">{clients}+</div>
              <div className="stat-label">Happy Clients</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section (Profile Image with Framer Motion) */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="profile-container">
            <motion.img
              src={profile}
              className="img"
              alt="profile"
              animate={{ y: [0, -10, 0] }} // Floating animation
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            <div className="animated-border"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
