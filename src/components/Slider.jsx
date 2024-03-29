// ImageSlider.js
import React, { useState, useEffect } from 'react';
import './Slider.css';
import flipshop from '../photos/flipshop.png';
import authoquiz from '../photos/authorizQuiz.png';
import biography from '../photos/biography.png';
import documentation from '../photos/documentation.png';
import form from '../photos/form.png';
import lengthconv from '../photos/lengthconv.png';
import magazine from '../photos/magazine.png';
import portfolio from '../photos/portfolio.png';
import quiz from '../photos/quiz.png';
import productlanding from '../photos/productlanding.png';

const websitesData = [
  {
    id: 1,
    title: '1.FlipShop',
    url: 'https://joyful-fox-fa5524.netlify.app',
    image: flipshop,
  },
  {
    id: 2,
    title: '2.quiz',
    url: 'https://tangerine-sunshine-bf53ee.netlify.app',

    image: quiz,
  },
  {
    id: 3,
    title: '3.productlanding',
    url: 'https://extraordinary-salamander-46ff5d.netlify.app',
    image: productlanding,
  },
  {
    id: 4,
    title: '4.Documentation',
    url: 'https://voluble-moxie-7a9444.netlify.app',
    image: documentation,
  },
  {
    id: 5,
    title: '5.length-convertor',
    url: 'https://harmonious-malasada-5264cd.netlify.app',
    image: lengthconv,
  },
  {
    id: 6,
    title: "6.magazine",
    url: 'https://animated-cocada-081c57.netlify.app',
    image: magazine,
  },
  {
    id: 7,
    title: '7.biography',
    url: 'https://spectacular-marshmallow-b58fdc.netlify.app',
    image: biography,
  },
  {
    id: 8,
    title: '8.Form',
    url: 'https://unrivaled-praline-4e0984.netlify.app',
    image: form,
  },
  {
    id: 9,
    title: '9.Auth Quiz',
    url: 'https://coruscating-entremet-8df299.netlify.app',
    
    image: authoquiz,
  },
  {
    id: 10,
    title: '10.portfolio',
    url: 'https://tiny-churros-01fad7.netlify.app',
    image: portfolio,
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
  

    //  Use useEffect for automatic slideshow
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
    
        <h2 align="center" >My Frontend Projects</h2>

        <div className="website">

          
            <a href={currentWebsite.url} target="_blank" rel="noopener noreferrer">
                <img src={currentWebsite.image} alt={currentWebsite.title} />
                <h3>{currentWebsite.title}</h3>
            </a>
            {/* {websitesData.map((site)=>(
            <div className='items' align="center">

                <a href={site.url} target="_blank" rel="noopener noreferrer">
                <img src={site.image} alt={site.title} />
                <h3>{site.title}</h3>
              </a>
            </div>

            ))} */}
          
          
        </div>

        <div className="navigation">
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    );
  };
  
  export default Slider;