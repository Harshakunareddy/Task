// import React, { useState } from 'react';
import './Certificates2.css';
import one from "../photos/freecodecamp.png";
import two from "../photos/androidTraining.jpg";
import three from "../photos/TechTalkByJntu.jpg";



const Certificates2 = () => {

  return (
    <>
      <div className="project-slider">
        <div align="center" className="dynamic" ><b>My Trainings and Events Certifications</b></div>

        <div className="project">
          <div className="proj">
            <a href="https://www.freecodecamp.org/certification/fcc44c9459f-c5d5-468b-8fc0-446fcfe4f26b/responsive-web-design" target="_blank" rel="noopener noreferrer">

              <img className="img1" src={one} alt="Freecodecamp.org" />
              <h2 align="center">freeCodeCamp.org</h2>
            </a>
          </div>
          
          <div className='proj'>
            <a href="https://drive.google.com/file/d/1_SX3xThEYoPnJQ_HgkO0JZRgBOsILUAA/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">

              <img className="img1" src={two} alt="Android" />
              <h2 align="center">Internshala Trainings</h2>
            </a>
          </div>
          <div className='proj'>
            <a href="https://drive.google.com/file/d/18Awf6TD_EDuTT9GWl6qxT3zjG62t4G4Z/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">

              <img className="img2" src={three} alt="techtalk" />
              <h2 align="center">JNTU-Techtalk</h2>
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

export default Certificates2;
