import React, { useState } from 'react';
import './ProjectSlider.css';

const ProjectSlider = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
  };

  return (
    <>
    <h1 align="center" >Projects</h1>
      <div className="project-slider">
        <button className="slider-button prev" onClick={prevSlide}>
          Previous
        </button>
        <div className="project">
          {/* <h2>{projects[currentIndex].title}</h2> */}
          {/* <p>{projects[currentIndex].description}</p> */}
          <img className="img" src={projects[currentIndex].imageUrl} alt={projects[currentIndex].title} />
        </div>
        <button className="slider-button next" onClick={nextSlide}>
          Next
        </button>
      </div>
    </>
    
  );
};

export default ProjectSlider;
