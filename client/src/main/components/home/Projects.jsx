import React, {useEffect, useState} from 'react'
import {axiosInstance} from "../../../utils/config";
import {format} from "date-fns";
import {Link} from "react-router-dom";
import Cookies from 'js-cookie';
import {SiGithub} from "react-icons/si";
const Projects = () => {

  const [data, setData] = useState([]);


  useEffect(() => {

    const fetchData = async (e) => {

      try{

        let proj = Cookies.get("projects");
     

        if(proj !== undefined){
          console.log("PROJ NOT UNDEFINED");
          setData(JSON.parse(proj));
          return;
        }
        const res = await axiosInstance.get("/project/get-projects");
        var in24Hours = new Date(new Date().getTime() + 60 * 60 * 24000);

        Cookies.set("projects", JSON.stringify(res.data.table), {expires: in24Hours});


        setData(res.data.table);


      }catch(err){
        console.log(err);
      }

    }
    
    fetchData();

  }, []);


  return (
    <div id="projects">

      <h2>My Projects</h2>

      <div id="projects-flex">
      
        {data.map((item, i) => (
         <div className="project-container" key={i}>
          <span className="project-click-me">Click to see webpage</span>
          <a href={item.link} target="_blank">
            
          <img src={item.image} 
          alt="" className="src" title={item.link}/>
          </a>
         <div className='project-info' >
          <span className="project-title">{item.title}</span>
          <span className="project-date">Posted: {format(Date.parse(item.createdAt), "dd-LLLL-yyyy")}</span>
          <div className="project-desc">{item.desc}</div>
          </div>
          <div className="project-tags">
            <a href={item.github} target="_blank" className='tag'>
              <SiGithub/> Github Link</a>
            <div className="tag">{item.tags[0]}</div>
            <div className="tag">{item.tags[1]}</div>
            <div className="tag">{item.tags[2]}</div>
          </div>
        </div>

        ))}


      </div>

    </div>
  )
}

export default Projects