import React from "react";
import axios from "axios";
import config from "../../axiosConfig";

const LoginByRefreshToken = props => {
    axios.post("/users/refresh-token", {
    }, config).then((response)=>{
        localStorage.setItem('jwtToken', response.data.jwtToken)
        props.setLoggined(true)
    }).catch((reason)=>{
        console.log(reason)
        props.setLoggined(false)
    })
}

export default LoginByRefreshToken;