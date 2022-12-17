import React from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';
import config from '../axiosConfig';

class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.usernameInputFiels = React.createRef();
        this.passwordInputFiels = React.createRef();
        this.state = {
            username: '',
            password: '',
            isLoggined: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        const target = event.target;
        const value = target.name
        this.setState({[value]: event.target.value});
      }
      handleSubmit(event) {
        let dataForLoggin = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post("http://localhost:5164/users/authenticate", dataForLoggin ,{}).then((response)=>{
            this.setState({isLoggined: true})
            localStorage.setItem("jwtToken", response.data.jwtToken)
            this.props.setLoggined(true)
            config.headers={
                'Authorization':`Bearer ${response.data.jwtToken}`
            }
        }).catch((response)=>{alert("Wrong username or password" )})

        event.preventDefault();
        
      }
    render(){
        return (!this.state.isLoggined && <form onSubmit={this.handleSubmit}>
            <label>Login:
                <input required ref={this.usernameInputFiels} name="username" type="text" placeholder="login" onChange={this.handleChange} />
            </label>
            <label>Password:
                <input required ref={this.passwordInputFiels} name="password" type="password" placeholder="password" onChange={this.handleChange} />
            </label>
            <input type="submit"  value="Submit"/>
        </form>);
    }
}
export default LoginForm