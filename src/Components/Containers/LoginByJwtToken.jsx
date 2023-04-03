import axios from 'axios'
import { config } from '../../axiosConfig'
import mainStore from '../../Mobx/store'


const LoginByJwtToken = (props) => {
    console.log('LoginByJwtToken')
    axios.get("/users/is-authorized", {...config,
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('jwtToken')}`
        }
    }).then((response)=>{
        console.log(response)
        if (response.data === true){
            mainStore.setIsLoggined(true)
        }
    })
}
export default LoginByJwtToken
