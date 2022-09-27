import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import TopHeader from "../components/home/TopHeader";
import About from "../components/home/About";
import Projects from "../components/home/Projects";
import Services from "../components/home/Services";
import Contact from "../components/home/Contact";
import Skills from "../components/home/Skills";
import BottomFooter from './home/BottomFooter';


const Header = () => {
  return (
    <>
    
    
    <div id="header">

      <ul id="header-ul">

        {/* <li className='header-li'><Link to="top-header"
                                  spy={true}
                                  smooth={true}
                                  offset={-65}
                                  >Header</Link></li> */}
        <li className='header-li'><Link to="about"
                                  spy={true}
                                  smooth={true}
                                  offset={-65}
                                  >About</Link></li>
        <li className='header-li'><Link to="projects"
                                  spy={true}
                                  smooth={true}
                                  offset={-65}
                                  >Projects</Link></li>
                                  
        <li className='header-li'><Link to="skills"
                                  spy={true}
                                  smooth={true}
                                  offset={-65}
                                  >Skills</Link></li>

        <li className='header-li'><Link to="services"
                                  spy={true}
                                  smooth={true}
                                  offset={-65}
                                  >Services</Link></li>
        <li className='header-li'><Link to="contact"
                                  spy={true}
                                  smooth={true}
                                  offset={-65}
                                  >Contact</Link></li>
      </ul>

    </div>
    <TopHeader/>
      <About/>
      <Projects/>
      <Skills/>
      <Services/>
      <Contact/>
      <BottomFooter/>

    </>


  )
}

export default Header

