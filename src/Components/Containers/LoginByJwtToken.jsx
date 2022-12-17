import React from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const LoginByJwtToken = (props) => {
    axios.get("http://localhost:5164/users/is-authorized", {
        headers:{
            'Authorization':`Bearer ${Cookies.get('jwtToken')}`
        }
    }).then((response)=>{
        console.log(response)
        response.data === true && props.setLoggined(true)
    })
}
export default LoginByJwtToken