import axios from "axios";
// import jwt_decode from "jwt-decode";


const BASE_URL = "http://localhost:8000/api/";

const CheckToken = JSON.parse(localStorage.getItem("persist:root"));
let TOKEN = null;

if(CheckToken !== null){
    console.log("TOKEN", TOKEN);
}

export const axiosInstance = axios.create({
    baseURL:BASE_URL
});



export const adminInstance = axios.create({
    baseURL:BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
})

export const imageExtensionList = ["png", "jpg", "jpeg", "gif"];

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    // headers: {token: `Bearer ${TOKEN}`},
});
