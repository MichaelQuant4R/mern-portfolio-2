import { loginFailure, loginStart, loginSuccess, logout } from "./authRedux";
import { loginFailureAdmin, loginStartAdmin, loginSuccessAdmin, logoutAdmin } from "./adminRedux";
import { dataStartAdmin, dataSuccessAdmin, dataFailureAdmin } from "./adminDataRedux";
import { publicRequest, userRequest } from "../utils/config.js";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import {
    getBlogsStart,
    getBlogsFailure,
    getBlogsSuccess,

    deleteBlogStart,
    deleteBlogFailure,
    deleteBlogSuccess,

    updateBlogStart,
    updateBlogFailure,
    updateBlogSuccess,

    newBlogStart,
    newBlogSuccess,
    newBlogFailure,
} from "./blogRedux";


export const getAdminTableData = async (dispatch, body) => {

    dispatch(dataStartAdmin());
    try{

        const res = await publicRequest.get("/admin/admin-table-data", body);

        console.log("GET ADMIN TABLE DATA");
        console.log(body);

        dispatch(dataSuccessAdmin(res.data));

    }catch(err){
        dispatch(dataFailureAdmin());
    }
}



export const loginAdminFunc = async (dispatch, navigate, body) => {

    dispatch(loginStartAdmin());
    try{
        const res = await publicRequest.post("/admin/admin-login", body);

        console.log("LOGIN ADMIN RES");
        console.log(res);
        dispatch(loginSuccessAdmin(res.data));

        // console.log(first)
        console.log("ADMIN TOKEN", res.data.adminToken);
        var in24Hours = new Date(new Date().getTime() + 60 * 60 * 24000);
        Cookies.set("admin", res.data.adminToken, {expires: in24Hours});
        navigate(`/admin/home`)

    }catch(err){
         dispatch(loginFailureAdmin());
         return err;
        
    }
}



export const logoutAdminUser = async (dispatch, navigate, body) => {

    console.log("LOGOUT ADMIN USER", body);
    try{
        const res = await publicRequest.put(`/admin/admin-logout/${body}`);
        dispatch(logoutAdmin());
        Cookies.remove("admin");
        

        navigate("/");

        return res;
    }catch(err){
        console.log(err);
    }
};



export const login = async (dispatch, navigate, user) => {

    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
        Cookies.set("token", res.data.token);

        navigate(`/profile/${res.data._id}`);
    }catch(err){
        dispatch(loginFailure());
    }
};

export const logoutUser = async (dispatch, navigate, body) => {
    try{
        const res = await publicRequest.put(`/auth/logout/${body}`);
        dispatch(logout());
        Cookies.remove("token");
        navigate("/");
    }catch(err){
        console.log(err);
    }
};

export const blogs = async (dispatch) => {
    dispatch(getBlogsStart());
    try{
        const res = await publicRequest.get("/blogs");
        dispatch(getBlogsSuccess(res.data));
    }catch(err){
        dispatch(getBlogsFailure());
    }
};

export const deleteBlog = async (id, dispatch) => {
    dispatch(deleteBlogStart());
    try{

        dispatch(deleteBlogSuccess(id));

    }catch(err){
        dispatch(deleteBlogFailure());
    }
};


export const updateBlog = async (id, blog, dispatch) => {
    dispatch(updateBlogStart());
    try{
        dispatch(updateBlogSuccess({id, blog}));
    }catch(err){
        dispatch(updateBlogFailure());
    }
};

export const addBlog = async (blog, dispatch) => {
    dispatch(newBlogStart());
    try{
        const res = await userRequest.post("/newBlog", blog);
        dispatch(newBlogSuccess(res.data));
    }catch(err){
        dispatch(newBlogFailure());
    }
}



export const testing =  async (dispatch) => {
    
    try{
        console.log("TESTING");
    }catch(err){
        console.log("CATCH ERROR!");
    }
};


















































