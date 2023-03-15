import React from "react";
import axios from "axios";
import {config} from "../../axiosConfig";
import store from "../../Mobx/store";

const LoginByRefreshToken = props => {
    axios.post("/users/refresh-token", {
    }, config).then((response)=>{
        localStorage.setItem('jwtToken', response.data.jwtToken)
        store.isLoggined = true
    }).catch((reason)=>{
        console.log(reason)
        store.isLoggined = false
    })
}

export default LoginByRefreshToken;
