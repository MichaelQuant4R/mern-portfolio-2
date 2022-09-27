import React from 'react'
import {VscDatabase, VscGithubInverted} from "react-icons/vsc";
import {SiHeroku, SiPython, SiFlask, 
    SiCsswizardry, SiStripe, SiPaypal,
    SiHtml5, SiJavascript, SiReact, SiPostgresql,
    SiMongodb, SiFirebase, SiJquery, SiJupyter,
    SiSqlite} from "react-icons/si";
import {FaAws} from "react-icons/fa";
import {DiDjango} from "react-icons/di";

const Skills = () => {
  return (
    <div id="skills">

            <h2>My Skill Set</h2>

        <div id="skills-container">

            <ul id="skills-ul">
                
                    <div className="skills-btn">
                        <li><SiReact/> React</li>
                    </div>
                
                    <div className="skills-btn">
                        <li><SiJavascript/> JavaScript</li>
                    </div>
               
                    <div className="skills-btn">
                        <li><SiHtml5/> HTML</li>
                    </div>
                
                    <div className="skills-btn">
                        <li><SiCsswizardry/> CSS</li>
                    </div>
                
                    <div className="skills-btn">
                        <li><SiMongodb/> MongoDB</li>
                    </div>
                
                    <div className="skills-btn">
                        <li><SiHeroku/> Heroku</li>
                    </div>
              
                    <div className="skills-btn">
                        <li><SiPython/> Python</li>
                    </div>
               
                    <div className="skills-btn">
                        <li><SiFlask/> Flask</li>
                    </div>
                
                    <div className="skills-btn">
                        <li><SiPostgresql/> PostgreSQL</li>
                    </div>
                
                    <div className="skills-btn">
                        <li><SiStripe/> Stripe API</li>
                    </div>
               
                    <div className="skills-btn">
                        <li><SiPaypal/> PayPal API</li>
                    </div>
                    <div className="skills-btn">
                        <li><VscGithubInverted/> GitHub</li>
                    </div>
                    <div className="skills-btn">
                        <li><SiFirebase/> Firebase</li>
                    </div>
                    <div className="skills-btn">
                        <li><FaAws/> AWS</li>
                    </div>
                    <div className="skills-btn">
                        <li><SiJquery/> JQuery</li>
                    </div>
                    <div className="skills-btn">
                        <li><SiJupyter/> Jupyter Notebook</li>
                    </div>
                    <div className="skills-btn">
                        <li><SiSqlite/> SQLite</li>
                    </div>
                    
                    <div className="skills-btn">
                        <li><DiDjango/> Django</li>
                    </div>
                    
            </ul>
        </div>
    </div>
  )
}

export default Skills