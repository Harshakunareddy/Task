// import React, { useState } from 'react';
import './Certificates.css';
import one from "../photos/internpe.jpg";
import two from "../photos/duranc.jpg";
import three from "../photos/saiyans.png";


const Certificates = () => {

  return (
    <>
     <div className='section' id="certificates">
        <h1 align="center" className="intern">My Internship Certificates</h1>
        <div className='section2'>

            <a href="https://drive.google.com/file/d/1MCFPuQsokTwkM-xcgZUMr7HoO1d9Tbz4/view?usp=drivesdk" target="_blank" rel='noopener noreferrer' className="img3">
                <img src={one} alt="internpe" />
            </a>
            <a href="https://drive.google.com/file/d/1WPLAws3DxFOLU22xwl2LaU4A_CpJuH75/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className='img3'>
                <img src={two} alt="duranc" />
            </a>
            <a href="https://drive.google.com/file/d/1sWL82AbFojnMzH8uxSZR9Oi7opDNhaDP/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className='img3'>
                <img src={three} alt="saiyansBm" />
            </a>
        </div>
        
     </div>

     
    </>
    
  );
};

export default Certificates;
