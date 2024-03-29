// About.js
import React from 'react';
import './About.css';
import one from "../photos/harsha.jpg";

const About = () => {
  return (
    <>

        <section className="about-section">
          <h1 align="center" className='about'>About Me</h1>

          <div className='flex'>
              
            <div className="profile-img">
              <img src={one} className='img' alt="profile" />
            </div>
            <div className="about-content">
              <p>
                Welcome! I'm a passionate developer with a love for creating
                web applications. With a background in <b>Mern stack , Django and also Android</b>, I bring quality work to
                every project I work on. Let's bring your ideas to life.
              </p>
            </div>

          </div>
        </section>
        <div className="gap">gap</div>
    </>
    
  );
};

export default About;
