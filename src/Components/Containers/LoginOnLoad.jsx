import doesHttpOnlyCookieExist from "../../Handlers/CookieHandler";
import {config} from "../../axiosConfig";
import {GetDirectoriesTree} from '../../Handlers/Requests';
import mainStore from "../../Mobx/store";
import LoginByRefreshToken from "./LoginByRefreshToken";

const LoginOnLoad = (props) => {
    if (!doesHttpOnlyCookieExist("refreshToken")){
        return
    }
    new Promise((resolve, reject) => {
        LoginByRefreshToken()
        config.headers = {
            'Authorization':`Bearer ${localStorage.getItem('jwtToken')}`
        }
        resolve()
    }).then(()=>{
        GetDirectoriesTree().then(()=>{
            mainStore.setIsLoggined(true)
        });
    })
    
    
}
export default LoginOnLoad
