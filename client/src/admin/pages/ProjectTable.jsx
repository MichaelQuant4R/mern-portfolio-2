import React, {useEffect, useState, useMemo} from 'react'
import {Link} from "react-router-dom";

import {axiosInstance} from "../../utils/config";

const ProjectTable = () => {

  const [projectTable, setProjectTable] = useState([]);
  const [folder, setFolder] = useState("");

  const openLink = (url) => {

    const newWindow = window.open(url, "_blank", 'noopener,noreferrer');
    if(newWindow) newWindow.opener = null;
  }

  useEffect(() => {

    const fetchData = async () => {

      try{
          const res = await axiosInstance.get("/project/get-projects");
          console.log(res);
          console.log(res.data.table);

          setProjectTable(res.data.table);
    
      }catch(err){
        console.log(err);
      }
    }
    fetchData();
  }, [])

  return (
    <div id="project-table">

      <div id="project-table-container">
        <h3>Project Table</h3>
        <h3>{folder}</h3>


        <div id="project-table-list">

          <table>
            <caption>Table Data</caption>
            <tbody>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Image</th>
                <th>Link</th>
                <th>Created At</th>
                <th>GitHub</th>
                <th>Tags</th>
              </tr>
        
          {/* {JSON.stringify(table)} */}
          {projectTable.map((item, i) => (

            <tr key={i}>
              <td >{item.title}</td>
              <td>{item.desc}</td>
              <td>
                {item.image}
              <img className='project-table-click-img'  src={item.image}/>
              </td>
              <td><Link href="#" onClick={() => openLink(item.link)} target="_blank">
                {item.link}
              </Link>
              </td>
             
              <td>{item.createdAt}</td>
              <td>{item.github}</td>
              <td>{item.tags.map((tag, t) => (
               
                <p key={t}>{tag}</p>
               
              ))}</td>
            </tr>
          ))}
              </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default ProjectTable