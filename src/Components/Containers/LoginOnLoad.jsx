import React from "react";
import Cookies from "js-cookie";
import LoginByRefreshToken from "./LoginByRefreshToken";
import doesHttpOnlyCookieExist from "../../Handlers/CookieHandler";
import config from "../../axiosConfig";
import GetDirectoriesTree from '../../Handlers/Requests';

const LoginOnLoadAsync = props => {

    console.log(1)
    if (!doesHttpOnlyCookieExist("refreshToken")){
        return
    }
    console.log(3)
    LoginByRefreshToken({setLoggined: props.setLoggined})
    config.headers= {
        'Authorization':`Bearer ${localStorage.getItem('jwtToken')}`
    }
    GetDirectoriesTree({setDirectoriesTree: props.setDirectoriesTree});

}



export default LoginOnLoadAsync
