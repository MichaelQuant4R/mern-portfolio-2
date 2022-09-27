import React, {useEffect} from 'react'
import LoginAdmin from '../../main/pages/LoginAdmin'
import Admin from '../pages/Admin'
import NewBlog from '../pages/NewBlog'
import NewUser from '../pages/NewUser'
import UserTable from "../pages/UserTable";
import NotFoundAdmin from "../pages/NotFoundAdmin";
import AdminProfile from "../pages/AdminProfile";
import AdminTable from "../pages/AdminTable";
import BlogTable from "../pages/BlogTable";
import AdminBlog from "../pages/AdminBlog";
import NewProject from "../pages/NewProject";
import ProjectTable from "../pages/ProjectTable";
import AdminUserProfile from '../pages/AdminUserProfile'
import AdminProject from '../pages/AdminProject'
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { logoutAdminUser } from '../../redux/apiCalls'
import "../css/global.css";
import FooterAdmin from "./FooterAdmin";
import { IconName } from "react-icons/fa";


const NavbarAdmin = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log("NAVBAR ADMIN PROPS");
        // console.log(props);
    }, [props])

    const handleLogout = (e) => {

        console.log(props.admin._id);


        console.log("HANDLE LOGOUT");

        logoutAdminUser(dispatch, navigate, props.admin._id);
    }
    
  return (
    <div id="navbar-admin">

        <ul id="navbar-ul-admin">

            <li>
                <Link to="/admin/home">Admin</Link>
            </li>
            <li>
                <Link to="/admin/new-user">New User</Link>
            </li>
            <li>
                <Link to="/admin/new-blog">New Blog</Link>
            </li>
            <li>
                <Link to="/admin/new-project">New Project</Link>
            </li>
            <li>
                <Link to="/admin/user-table">User Table</Link>
            </li>
            <li>
                <Link to="/admin/blog-table">Blog Table</Link>
            </li>
            <li>
                <Link to="/admin/admin-table">Admin Table</Link>
            </li>
            <li>
                <Link to="/admin/project-table">Project Table</Link>
            </li>
            <li onClick={handleLogout}>
                <Link to="/" >Logout</Link>
            </li>


        </ul>

        <Routes>

            <Route exact path="/admin/home" element={<Admin/>}/>
            <Route exact path="/admin" element={<Admin/>}/>
            <Route exact path="/admin/new-user" element={<NewUser/>}/>
            <Route exact path="/admin/new-blog" element={<NewBlog/>}/>

            <Route exact path="/admin/user-table" element={<UserTable/>}/>
            <Route exact path="/admin/profile/:id" element={<AdminUserProfile/>}/>
            <Route exact path = "/admin/admin-blog/:id" element={<AdminBlog/>}/>

            <Route exact path = "/admin/admin-table" element = {<AdminTable/>}/>
            <Route exact path ="/admin/admin-profile/:id" element ={<AdminProfile/>}/>

            <Route exact path ="/admin/blog-table" element={<BlogTable/>}/>

            <Route exact path ="/admin/project-table" element={<ProjectTable/>}/>
            <Route exact path ="/admin/new-project" element={<NewProject/>}/>
            <Route exact path="/admin/project/:id" element={<AdminProject/>}/>
            <Route  path="/admin/*" element={<NotFoundAdmin/>}/>
            <Route  path="*" element={<NotFoundAdmin/>}/>


        </Routes>


        <FooterAdmin/>
    </div>
  )
}

export default NavbarAdmin