// About.js
import React from 'react';
import './About.css';
import one from "../photos/my.jpg";

const About = () => {
  return (
    <>
      <h1 align="center">About Me</h1>

        <section className="about-section">

          <div className="profile-img">
            <img src={one} className='img' alt="profile" />
          </div>
          <div className="about-content">
            <p>
              Welcome! I'm a passionate developer with a love for creating
              web applications. With a background in Mern stack and Django, I bring quality work to
              every project I work on. Let's bring your ideas to life.
            </p>
          </div>
        </section>
        <hr></hr>
    </>
    
  );
};

export default About;
