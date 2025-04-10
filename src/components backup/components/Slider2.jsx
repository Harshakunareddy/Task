// ImageSlider.js
import React, { useState,useEffect } from 'react';
import './Slider.css';

import ferriswheel from '../photos/ferriswheel.png';
import penguin from '../photos/penguin.png';
import skyline from '../photos/skyline.png';

const websitesData = [
  {
    id: 1,
    title: 'Skyline',
    url: 'https://653f89c1de07b05aabbdf6b5--starlit-starlight-8adfd5.netlify.app/',
    image: skyline,
  },
  {
    id: 2,
    title: 'penguin',
    url: 'https://653f85b1aa0d345d6febe961--effortless-macaron-c6bac1.netlify.app/',
    image: penguin
  },
  {
    id: 3,
    title: 'ferriswheel',
    url: 'https://6540bf8e9180be129cb3510a--luxury-halva-8c472a.netlify.app/',
    image: ferriswheel,
  },
  
  

  // Add more website objects with titles, URLs, and image filenames
];

const Slider = () => {
    const [currentWebsiteIndex, setCurrentWebsiteIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentWebsiteIndex((prevIndex) => (prevIndex + 1) % websitesData.length);
    };
  
    const handlePrevious = () => {
      setCurrentWebsiteIndex((prevIndex) => (prevIndex - 1 + websitesData.length) % websitesData.length);
    };
  
     // Use useEffect for automatic slideshow
    useEffect(() => {
      const intervalId = setInterval(() => {
        handleNext();
      }, 5000); // Change 5000 to the desired interval in milliseconds (e.g., 5000 for 5 seconds)

      // Cleanup function to clear the interval on component unmount
      return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs once after initial render

    const currentWebsite = websitesData[currentWebsiteIndex];
  
    return (
      
      <div className="image-slider-container">
    
        <h2 align="center" >My Css Animations</h2>

        <div className="website">
          <a href={currentWebsite.url} target="_blank" rel="noopener noreferrer">
            <img src={currentWebsite.image} alt={currentWebsite.title} />
            <h3>{currentWebsite.title}</h3>
          </a>
        </div>
        <div className="navigation">
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    );
  };
  
  export default Slider;