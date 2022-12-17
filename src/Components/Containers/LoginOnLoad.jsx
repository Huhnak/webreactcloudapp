import React from "react";
import Cookies from "js-cookie";
import LoginByRefreshToken from "./LoginByRefreshToken";
import doesHttpOnlyCookieExist from "../../Handlers/CookieHandler";
import config from "../../axiosConfig";

const LoginOnLoad = props => {
    if (!doesHttpOnlyCookieExist("refreshToken"))
        return
    LoginByRefreshToken({setLoggined: props.setLoggined})
    config.headers= {
        'Authorization':`Bearer ${localStorage.getItem('jwtToken')}`
    }
} 



export default LoginOnLoad