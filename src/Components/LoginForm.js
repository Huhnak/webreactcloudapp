import React from 'react'
class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
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
        alert('A name was submitted: ' + this.state.username + this.state.password);
        event.preventDefault();
      }
    render(){
        return (<form onSubmit={this.handleSubmit}>
            <label>Login:
                <input name="username" type="text" placeholder="login" onChange={this.handleChange} />
            </label>
            <label>Password:
                <input name="password" type="password" placeholder="password" onChange={this.handleChange} />
            </label>
            <input type="submit"  value="Submit"/>
        </form>);
    }
}
export default LoginForm