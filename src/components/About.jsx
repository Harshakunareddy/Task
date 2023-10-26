// About.js
import React from 'react';
import './About.css';
import one from "../photos/my.jpg";

const About = () => {
  return (
    <section className="about-section">
        <h2 align="center">About Me</h2>

      <div className="profile-img">
        <img src={one} className='img' alt="profile" />
      </div>
      <div className="about-content">
        <p>
          Welcome! I'm a passionate developer with a love for creating
          web applications. With a background in Mern stack, I bring quality work to
          every project I work on. Let's bring your ideas to life.
        </p>
      </div>
    </section>
  );
};

export default About;
