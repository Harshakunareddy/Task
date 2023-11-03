// import React, { useState } from 'react';
import './ProjectSlider.css';
import one from "../photos/socialmedia.png";
import two from "../photos/store.png";
import three from "../photos/uiop.png";


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
      <div className="project-slider" id="projects">
        {/* <button className="slider-button prev" onClick={prevSlide}>
          Previous
        </button> */}
        <div align="center" className="dynamic" ><b>My Dynamic Applications or Projects</b></div>

        <div className="project">
          {/* <h2>{projects[currentIndex].title}</h2> */}
          {/* <p>{projects[currentIndex].description}</p> */}
          <div className="proj">
            <a href="https://splendorous-shortbread-4c1cd7.netlify.app/" target="_blank" rel="noopener noreferrer">

              <img className="img1" src={one} alt="project 1" />
              <h2 align="center">mern-socialmedia</h2>
            </a>
          </div>
          
          <div className='proj'>
            <a href="https://store-tweq.onrender.com/" target="_blank" rel="noopener noreferrer">

              <img className="img1" src={two} alt="project 2" />
              <h2 align="center">django-ecommerce</h2>
            </a>
          </div>
          <div className='proj'>
            <a href="https://play.google.com/store/apps/details?id=com.harsha.calling" target="_blank" rel="noopener noreferrer">

              <img className="img2" src={three} alt="project 3" />
              <h2 align="center">Android-Randomcalling</h2>
            </a>
          </div>
          
        </div>
        {/* <button className="slider-button next" onClick={nextSlide}>
          Next
        </button> */}
      </div>
    </>
    
  );
};

export default ProjectSlider;
