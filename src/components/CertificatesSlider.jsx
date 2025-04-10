import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaGlobe } from "react-icons/fa";
import "./ProjectSlider.css";

// Certificate Images
import one from "../photos/freecodecamp.png";
import two from "../photos/androidTraining.jpg";
import three from "../photos/TechTalkByJntu.jpg";
import four from "../photos/duranc.jpg";
import five from "../photos/saiyans.png";

// Certificate Data
const certificates = [
  {
    name: "freeCodeCamp.org - Web Design",
    image: one,
    link: "https://www.freecodecamp.org/certification/fcc44c9459f-c5d5-468b-8fc0-446fcfe4f26b/responsive-web-design",
  },
  {
    name: "Internshala - Android Training",
    image: two,
    link: "https://drive.google.com/file/d/1_SX3xThEYoPnJQ_HgkO0JZRgBOsILUAA/view?usp=drivesdk",
  },
  {
    name: "JNTU - TechTalk Event",
    image: three,
    link: "https://drive.google.com/file/d/18Awf6TD_EDuTT9GWl6qxT3zjG62t4G4Z/view?usp=drivesdk",
  },
  {
    name: "Duranc Internship Certificate",
    image: four,
    link: "https://drive.google.com/file/d/1WPLAws3DxFOLU22xwl2LaU4A_CpJuH75/view?usp=drivesdk",
  },
  {
    name: "Saiyans Internship Certificate",
    image: five,
    link: "https://drive.google.com/file/d/1sWL82AbFojnMzH8uxSZR9Oi7opDNhaDP/view?usp=drive_link",
  },
];

const CertificatesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  return (
    <motion.div
      className="project-slider"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="certificates"
    >
      <h1 className="cert-title">My Certificates</h1>

      <div className="slider-container">
        {/* Left Side - Certificate Image */}
        <motion.div
          className="project-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={certificates[currentIndex].image} alt={certificates[currentIndex].name} />
        </motion.div>

        {/* Right Side - Certificate Details */}
        <motion.div
          className="project-details"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>{certificates[currentIndex].name}</h2>
          <a
            className="project-link"
            href={certificates[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe /> View Certificate
          </a>

          {/* Navigation Buttons */}
          <div className="slider-buttons">
            <motion.button className="slider-button" onClick={prevSlide} whileTap={{ scale: 0.9 }}>
              <FaArrowLeft />
            </motion.button>
            <motion.button className="slider-button" onClick={nextSlide} whileTap={{ scale: 0.9 }}>
              <FaArrowRight />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CertificatesSlider;
