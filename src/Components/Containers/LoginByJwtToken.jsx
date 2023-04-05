import axios from 'axios'
import { configWithBearer } from '../../axiosConfig'
import mainStore from '../../Mobx/store'


const LoginByJwtToken = (props) => {
    console.log('LoginByJwtToken')
    axios.get("/users/is-authorized", configWithBearer())
    .then((response)=>{
        console.log(response)
        if (response.data === true){
            mainStore.setIsLoggined(true)
        }
    })
}
export default LoginByJwtToken
