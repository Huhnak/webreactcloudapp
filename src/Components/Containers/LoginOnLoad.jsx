import doesHttpOnlyCookieExist from "../../Handlers/CookieHandler";
import {GetDirectoriesTree} from '../../Handlers/Requests';
import mainStore from "../../Mobx/store";
import LoginByRefreshToken from "./LoginByRefreshToken";

const LoginOnLoad = async (props) => {
    if (!doesHttpOnlyCookieExist("refreshToken")){
        return
    }
    await LoginByRefreshToken()
    GetDirectoriesTree().then(()=>{
        mainStore.setIsLoggined(true)
    });
    }

export default LoginOnLoad
