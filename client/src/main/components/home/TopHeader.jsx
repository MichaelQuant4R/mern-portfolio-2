import React from 'react'
import {SvgBlob} from "react-svg-blob";
import {RiCodeSSlashFill} from "react-icons/ri";
import {GrTextAlignLeft, GrTextAlignRight} from "react-icons/gr";

const TopHeader = () => {
  return (
    <div id="top-header">
       
          <br />
          
          <div id="code-icon-full-container">

          <div className="code-icon-text">
          <GrTextAlignLeft/>
          </div>
            

          <div id="code-icon-container">
            <RiCodeSSlashFill/>
          </div>
         
            <div id="top-header-title">
              {"<"}Full Stack Web Developer{"/>"}
            </div>
          

          <div id="typewriter-container">
            <div className="typewriter">
              <h1>Holistic Coding with Michael</h1>
              </div>

          </div>
          <div className="code-icon-text">
          <GrTextAlignRight/>
            
          </div>
          </div>


      

          {/* <SvgBlob variant='gradient' colors={['#2980B9', '#6DD5FA']} /> */}
          
       

    
    </div>
  )
}

export default TopHeader