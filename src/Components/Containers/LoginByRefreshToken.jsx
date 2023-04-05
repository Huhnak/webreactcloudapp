import axios from "axios";
import {configWithBearer} from "../../axiosConfig";
import mainStore from "../../Mobx/store";


const LoginByRefreshToken = () => {
    axios.post("/users/refresh-token", configWithBearer()).then( (response)=>{
        localStorage.setItem('jwtToken', response.data.jwtToken)
        mainStore.setIsLoggined(true);
    }).catch((reason)=>{
        console.log(reason)
        mainStore.setIsLoggined(false);
    })
}

export default LoginByRefreshToken;
