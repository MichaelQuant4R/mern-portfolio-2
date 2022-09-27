import React from 'react';
import { Link } from 'react-router-dom';
import {SiYoutube, SiLinkedin, 
      SiStackoverflow, SiGithub} from "react-icons/si";

const BottomFooter = () => {

    
  const links = [
    {"link":"https://www.linkedin.com/in/michael-russell-155953a6/",
    "icon": SiLinkedin,
    "name": "LinkedIn"},
    {"link": "https://www.youtube.com/channel/UC9co-ojO-U_J678s_Da0vYA",
    "icon": SiYoutube,
    "name": "YouTube"},
    {"link": "https://github.com/MichaelQuant4R",
    "icon": SiGithub,
    "name": "Github"},
    {"link": "https://stackoverflow.com/users/7776559/michaelrsf",
    "icon": SiStackoverflow,
    "name": "Stackoverflow"}];

const handleLink = (url) => {
console.log(url);
window.open(url, "_blank");

// window.location.href = url;
}

  return (
    <div id="bottom-footer">






<ul id="bottom-footer-ul">
        {links.map((item, i) => (
        <li key={i}>
<a href={item.link}  target="_blank">
  {<item.icon title={item.name}/>} {item.name}</a>
        </li>
        ))}
        <li>© Aug 2022 - Sep 2022</li>
      </ul>
    </div>
  )
}

export default BottomFooter