import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowLeft, FaArrowRight, FaGlobe } from "react-icons/fa";
import "./ProjectSlider.css";
import zero from "../photos/gradhous.png";
import grad2 from "../photos/grad2.png";

import one from "../photos/socialmedia.png";
import two from "../photos/store.png";
import debt from "../photos/debt.jpeg";


import trust1 from "../photos/trust1.png";
import trust2 from "../photos/trust2.png";
import sapid1 from "../photos/sapid1.jpeg";
import sapid2 from "../photos/sapid2.jpeg";
import sapid5 from "../photos/sapid5.jpeg";
import sapid3 from "../photos/sapid3.png";
import sapid4 from "../photos/sapid4.png";
import debtcoll2 from "../photos/debtcoll2.png";


import jilebi1 from "../photos/jilebi1.png";
import jilebi2 from "../photos/jilebi2.png";
import jilebi3 from "../photos/jilebi3.png";


// Project Data with Multiple Images
const projects = [

  {
    title: "Debt Collection App",
    techStack: "ReactJS, Firebase",
    description: "A debt collection company website.",
    images: [debt, debtcoll2],
    link: "https://debtcollectforu.com",
  },
  {
    title: "Jilebi.fun",
    techStack: "ReactJS, Socket.io, Nodejs, Adsterra Ads",
    description: "Best Omegle Alternative . My Own Product have 1000+ users worldwide",
    images: [jilebi1, jilebi2, jilebi3],
    link: "https://jilebi.fun",
  },

  {
    title: "Gradhous",
    techStack: "MERN Stack",
    description: "A house finding platform for abroad students.",
    images: [zero, grad2],
    link: "https://gradhous-dv.netlify.app/",
  },

  {
    title: "Sapid App",
    techStack: "Laravel,MySQL",
    description: "Food Order And Room Booking App",
    images: [sapid1, sapid2,sapid5],
    link: "https://indigo-rabbit-721159.hostingersite.com/admin/dashboard",
  },
  {
    title: "Sapid Admin Panel",
    techStack: "Laravel,MySQL",
    description: "Admin And Vendor Management Website",
    images: [sapid3, sapid4],
    link: "https://indigo-rabbit-721159.hostingersite.com/admin/dashboard",
  },
  {
    title: "Trust Labs",
    techStack: "React Native, Laravel,MySQL",
    description: "An Admin and vendor panel for maintaining their Employees , Goods in Medical Field.",
    images: [trust1, trust2],
    link: "https://salespulse365.mytrustlab.co.in/login",
  }

  // {
  //   title: "Social Media Platform",
  //   techStack: "MERN Stack",
  //   description: "A real-time chat and post-sharing social media app.",
  //   images: [one, two],
  //   link: "https://debtcollectforu.com",
  // },
];

const ProjectSlider = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide images every 3 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      nextImage();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(imageInterval); // Cleanup on unmount
  }, [currentProjectIndex, currentImageIndex]);

  // Auto-slide to next project after all images of a project are shown
  useEffect(() => {
    if (currentImageIndex >= projects[currentProjectIndex].images.length) {
      nextProject();
    }
  }, [currentImageIndex]);

  // Next Image (within a project)
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projects[currentProjectIndex].images.length);
  };

  // Previous Image
  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? projects[currentProjectIndex].images.length - 1 : prev - 1
    );
  };

  // Next Project (Resets to First Image)
  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    setCurrentImageIndex(0);
  };

  // Previous Project
  const prevProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
    setCurrentImageIndex(0);
  };

  return (
    <motion.div
      className="project-slider"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="projects"
    >
      <h1 align="center">Projects</h1>

      <div className="slider-container">
        {/* Left: Project Image Slideshow */}
        <motion.div
          className="project-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={projects[currentProjectIndex].images[currentImageIndex]}
            alt={projects[currentProjectIndex].title}
          />
          {/* Navigation Arrows for Image */}
          {/* <div className="image-nav">
            <FaArrowAltCircleLeft className="nav-icon" onClick={prevImage} />
            <FaArrowAltCircleRight className="nav-icon" onClick={nextImage} />
          </div> */}
        </motion.div>

        {/* Right: Project Details */}
        <motion.div
          className="project-details"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>{projects[currentProjectIndex].title}</h2>
          <p className="tech-stack">{projects[currentProjectIndex].techStack}</p>
          <p className="project-description">{projects[currentProjectIndex].description}</p>
          <a
            className="project-link"
            href={projects[currentProjectIndex].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe /> Visit Project
          </a>

          {/* Navigation Buttons for Projects */}
          <div className="slider-buttons">
            <motion.button className="slider-button" onClick={prevProject} whileTap={{ scale: 0.9 }}>
              <FaArrowLeft />
            </motion.button>
            <motion.button className="slider-button" onClick={nextProject} whileTap={{ scale: 0.9 }}>
              <FaArrowRight />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectSlider;

