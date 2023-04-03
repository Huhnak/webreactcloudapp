import React, { useRef, useState } from 'react'
import axios from 'axios';
import {config} from '../axiosConfig';
import {GetDirectoriesTree} from '../Handlers/Requests';
import mainStore from '../Mobx/store';
import { observer } from 'mobx-react-lite';

const LoginForm = (props) => {

    const usernameInputFiels = useRef()
    const passwordInputFiels = useRef()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUsername = (event) => {
        setUsername(event.target.value)
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleSubmit = (event) => {
        let dataForLoggin = {
            username: username,
            password: password
        }
        axios.post("/users/authenticate", dataForLoggin ,config).then((response)=>{
            localStorage.setItem("jwtToken", response.data.jwtToken)
            
            config.headers={
                'Authorization':`Bearer ${response.data.jwtToken}`
            }
        }).then(()=>{
            GetDirectoriesTree().then(()=>{mainStore.setIsLoggined(true)})
        })
        event.preventDefault();

    }
    return(
        !mainStore.isLoggined && <form onSubmit={handleSubmit}>
            <label>Login:
                <input required ref={usernameInputFiels} name="username" type="text" placeholder="login" onChange={handleChangeUsername} />
            </label>
            <label>Password:
                <input required ref={passwordInputFiels} name="password" type="password" placeholder="password" onChange={handleChangePassword} />
            </label>
            <input type="submit"  value="Submit"/>
        </form>
    )
}
export default observer(LoginForm)
