// import React, { useState } from 'react';
import './ProjectSlider.css';
import one from "../photos/1.jpg";
import two from "../photos/2.jpg";
import three from "../photos/3.jpg";


const ProjectSlider = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const nextSlide = () => {
  //   setCurrentIndex((currentIndex + 1) % projects.length);
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
  // };

  // const projects = [
  //   {
  //     title: 'Project 1',
  //     description: 'Description for Project 1',
  //     imageUrl: require('../photos/1.jpg').default,
  //   },
  //   {
  //     title: 'Project 2',
  //     description: 'Description for Project 2',
  //     imageUrl: require('../photos/2.jpg').default,
  //   },
  //   {
  //     title: 'Project 3',
  //     description: 'Description for Project 3',
  //     imageUrl: require('../photos/3.jpg').default,
  //   },
  //   // Add more projects
  // ];

  return (
    <>
    <h1 align="center" >Projects</h1>
      <div className="project-slider">
        {/* <button className="slider-button prev" onClick={prevSlide}>
          Previous
        </button> */}
        <div className="project">
          {/* <h2>{projects[currentIndex].title}</h2> */}
          {/* <p>{projects[currentIndex].description}</p> */}
          <img className="img1" src={one} alt="project 1" />
          <img className="img1" src={two} alt="project 2" />
          <img className="img1" src={three} alt="project 3" />
          
        </div>
        {/* <button className="slider-button next" onClick={nextSlide}>
          Next
        </button> */}
      </div>
    </>
    
  );
};

export default ProjectSlider;
