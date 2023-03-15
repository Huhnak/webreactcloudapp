import React from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { config } from '../../axiosConfig'


const LoginByJwtToken = (props) => {
    axios.get("/users/is-authorized", {...config,
        headers:{
            'Authorization':`Bearer ${Cookies.get('jwtToken')}`
        }
    }).then((response)=>{
        console.log(response)
        response.data === true && props.setLoggined(true)
    })
}
export default LoginByJwtToken
