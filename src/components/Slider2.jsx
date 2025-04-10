import React, { useState, useEffect } from 'react';
import './ProjectSlider.css';
import ferriswheel from '../photos/ferriswheel.png';
import penguin from '../photos/penguin.png';
import skyline from '../photos/skyline.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const websitesData = [
  {
    id: 1,
    title: 'Skyline',
    url: 'https://653f89c1de07b05aabbdf6b5--starlit-starlight-8adfd5.netlify.app/',
    image: skyline,
  },
  {
    id: 2,
    title: 'Penguin',
    url: 'https://653f85b1aa0d345d6febe961--effortless-macaron-c6bac1.netlify.app/',
    image: penguin,
  },
  {
    id: 3,
    title: 'Ferris Wheel',
    url: 'https://6540bf8e9180be129cb3510a--luxury-halva-8c472a.netlify.app/',
    image: ferriswheel,
  },
];

const Slider = () => {
  const [currentWebsiteIndex, setCurrentWebsiteIndex] = useState(0);

  const handleNext = () => {
    setCurrentWebsiteIndex((prevIndex) => (prevIndex + 1) % websitesData.length);
  };

  const handlePrevious = () => {
    setCurrentWebsiteIndex((prevIndex) => (prevIndex - 1 + websitesData.length) % websitesData.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const currentWebsite = websitesData[currentWebsiteIndex];

  return (
    <div className="project-slider">
      <h2 className="project-title">My CSS Animations</h2>
      <div className="slider-content">
        <a href={currentWebsite.url} target="_blank" rel="noopener noreferrer" className="project-link">
          <img src={currentWebsite.image} alt={currentWebsite.title} />
          <h3>{currentWebsite.title}</h3>
        </a>
      </div>
      <div className="slider-buttons">
        <button className="slider-button" onClick={handlePrevious}><FaArrowLeft /></button>
        <button className="slider-button" onClick={handleNext}><FaArrowRight /></button>
      </div>
    </div>
  );
};

export default Slider;
