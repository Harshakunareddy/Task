// ImageSlider.js
import React, { useState } from 'react';
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
    title: 'FlipShop',
    url: 'https://653f83fdbf18b35a76e62b15--joyful-fox-fa5524.netlify.app/',
    image: flipshop,
  },
  {
    id: 2,
    title: 'quiz',
    url: 'https://653f87eca367ef00a276ac2f--coruscating-entremet-8df299.netlify.app/',
    image: quiz,
  },
  {
    id: 3,
    title: 'productlanding',
    url: 'https://653f86c8a84654609af08068--timely-elf-605c00.netlify.app/',
    image: productlanding,
  },
  {
    id: 4,
    title: 'Documentation',
    url: 'https://6540bc50662d5f05ef30eeef--voluble-moxie-7a9444.netlify.app/',
    image: documentation,
  },
  {
    id: 5,
    title: 'length-convertor',
    url: 'https://6540b9789180be080fb34fd3--harmonious-malasada-5264cd.netlify.app/',
    image: lengthconv,
  },
  {
    id: 6,
    title: "magazine",
    url: 'https://653f8583a84654609af07b56--animated-cocada-081c57.netlify.app/',
    image: magazine,
  },
  {
    id: 7,
    title: 'biography',
    url: 'https://653f8bb3f818e704cc34e681--spectacular-marshmallow-b58fdc.netlify.app/',
    image: biography,
  },
  {
    id: 8,
    title: 'Form',
    url: 'https://653f8558de07b05804bdf1be--preeminent-monstera-2f3735.netlify.app/',
    image: form,
  },
  {
    id: 9,
    title: 'Auth Quiz',
    url: 'https://6540ba066afac5798bc0659d--sage-pony-57cbab.netlify.app/',
    image: authoquiz,
  },
  {
    id: 10,
    title: 'portfolio',
    url: 'https://653f8761cf13575c07ef42c8--tiny-churros-01fad7.netlify.app/',
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
  
    const currentWebsite = websitesData[currentWebsiteIndex];
  
    return (
      
      <div className="image-slider-container">
    
        <h2 align="center" >My Static Applications or Projects</h2>

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