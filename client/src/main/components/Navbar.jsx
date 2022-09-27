import React, {useEffect, useState} from 'react'
import Home from "../pages/Home";
import Account from "../pages/Account";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import LoginAdmin from "../pages/LoginAdmin";
import Register from "../pages/Register";
import CodeNotes from "../pages/CodeNotes";
import NotFound from "../pages/NotFound";
import Blog from "../pages/Blog";
import Blogs from "../pages/Blogs";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {FaMoon, FaSun, FaBars} from "react-icons/fa";
import {BiUserCircle} from "react-icons/bi";
import {logoutUser} from "../../redux/apiCalls";
import {zen} from "../../assets";
// components
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";


const Navbar = (props) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sidebarToggle, setSidebarToggle] = useState("sidebar-hide");

  const handleLogout = (e) => {
    console.log("LOGOUT");

    logoutUser(dispatch, navigate, props.auth._id);

  }

  const handleSidebar = () => {

    console.log("SIDE BAR TOGGLE")
    if(sidebarToggle !== "sidebar-show"){
      setSidebarToggle("sidebar-show");
    }
    else{
      setSidebarToggle("sidebar-hide");
    }
  }

  useEffect(() => {

  })

  return (

    <>
      <span id="full-page-cover"></span>
      <div id="navbar">

        
        <Sidebar sidebarToggle={sidebarToggle}/>

        <ul id="navbar-ul">

        <span id="navbar-fa-bars" onClick={handleSidebar}>

          <FaBars/>

        </span>



        <span id="navbar-left-side">
          <li>
            <Link id="navbar-logo" to="/"><img  src={zen}/></Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>

          <li>
            <Link to="/code-notes/:page">Code Notes</Link>
          </li>

        </span>

          <li id="toggle-night-mode" onClick={props.switchTheme}>
            <>

            {/* {props.theme === "light"? "Dark": "Light"} */}
            {props.theme ==="light"?  (<FaSun/>): (<FaMoon/>)}
            
            </>
          </li>

          {props.auth?
          (<>

            <span id="navbar-auth-container">
            
                <li style={{textTransform:"capitalize"}}>
                  <Link to="/profile"><BiUserCircle/></Link>
                </li>

                <li onClick={handleLogout}>
                  <Link to="/">Logout</Link>
                </li>
            
            
            </span>

        
        </>):
        (<>

        <span id="navbar-auth-container">

          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>


        </span>
        
        </>)}
        
        </ul>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/blogs" element={<Blogs/>}/>
          <Route exact path="/blog/:id" element={<Blog/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/profile/:id" element={<Profile/>}/>
          <Route exact path="/admin-login" element={<LoginAdmin/>}/>
          <Route exact path="/admin/login" element={<LoginAdmin/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/code-notes/:page" element={<CodeNotes/>}/>
          <Route  path="*" element={<NotFound/>}/>

        </Routes>






      
    
      </div>

    </>
  )
}

export default Navbar