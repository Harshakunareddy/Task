// import React, { useState } from 'react';
import './ProjectSlider.css';
import zero from "../photos/gradhous.png";
import one from "../photos/socialmedia.png";
import two from "../photos/store.png";
import three from "../photos/uiop.png";
import debt from "../photos/debt.jpeg";



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
        <div align="center" className="dynamic" ><b>My Full Stack Projects</b></div>




        
        

        <div className="project">




          <div className="proj">
            <a href="https://debtcollectforu.com" target="_blank" rel="noopener noreferrer">

              <img className="img1" src={debt} alt="project europe" />
              <h2 align="center">reactJs , firebase</h2>
            </a>
          </div>



          <div className="proj">
            <a href="https://gradhous-dv.netlify.app/" target="_blank" rel="noopener noreferrer">

              <img className="img1" src={zero} alt="project 0" />
              <h2 align="center">mern-gradhous</h2>
            </a>
          </div>



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
            <a href="https://galaxy.store/mtobfhbxn" target="_blank" rel="noopener noreferrer">

              <img className="img1" src={three} alt="project 3" />
              <h2 align="center">Android Omegle Clone Project</h2>
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
