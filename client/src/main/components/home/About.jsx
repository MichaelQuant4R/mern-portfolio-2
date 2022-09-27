import React from 'react'
import {FaHandPaper} from "react-icons/fa";
const image = require("../../images/me.jpg");


const About = () => {
  return (
    <div id="about">

          <h2>About</h2>
          <div id="about-shapes">

          <div id="about-triangle"></div>
          <div id="about-circle"></div>
          </div>
        
        <div id="about-container">

          <img className='about-me'  src={image} alt="" id="about-img" />

        
          <div className="about-me">
            
          <div id="about-para-container">

          <span id="about-intro-container">
          <h3>Hello </h3> <FaHandPaper id="shaking-hand"/>
            
            </span>
              <p className="about-para">
                I'm Michael, a self-taught Python and React web developer, specializing in building full stack MERN applications.
              </p>
              <p className="about-para">
              I enjoy learning new technologies, refining my existing programming and design skills, and devising new solutions to existing problems.
              </p>

              <p className="about-para">
              I am available for hire and looking to utilize my existing skill set to help others.
              Feel free to contact me and we can have an informal discussion.
              </p>


          </div>
        </div>
      </div>
    </div>
  )
}

export default About