import React from "react";
import Cookies from "js-cookie";
import LoginByRefreshToken from "./LoginByRefreshToken";
import doesHttpOnlyCookieExist from "../../Handlers/CookieHandler";
import config from "../../axiosConfig";
import GetDirectoriesTree from '../../Handlers/Requests';

const LoginOnLoadAsync = (props) => {
    if (!doesHttpOnlyCookieExist("refreshToken"))
        return

    LoginByRefreshToken()
    config.headers= {
        'Authorization':`Bearer ${localStorage.getItem('jwtToken')}`
    }

    GetDirectoriesTree();
}
export default LoginOnLoadAsync
