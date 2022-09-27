import React from 'react'
import {VscCode, VscGithub, VscFeedback} from "react-icons/vsc";

const Services = () => {
  return (
    <div id="services">

      <div id="services-title-header">Services</div>

      <div id="services-container">

        <div className="services-item">
          <VscCode className='services-icon'/>
          <span className="services-title">Web Development</span>
          <p>
            I develop full-stack web apps using HTML, CSS, JavaScript (MERN Stack).
          </p>
        </div>
      
        <div className="services-item">
          <VscGithub className='services-icon'/>
          <span className="services-title">Design HTML & CSS</span>
          <p>
            I can convert existing designs into pixel-perfect HTML/CSS websites.
            
          </p>
        </div>
      
        <div className="services-item">
          <VscFeedback className='services-icon'/>
          <span className="services-title">Tutoring</span>
          <p>
            You can book a 1-on-1 session with me for web dev training.
            Topics include HTML, CSS, React, Node.js, JS, MongoDB. £40/hr!
          </p>
        </div>
      
      </div>
    </div>
  )
}

export default Services