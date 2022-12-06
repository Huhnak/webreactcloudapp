import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: "My first react app"
        }
    }

    render(){
        return(
            <header className="header">{this.state.title}</header>
        )
    }
}

export default Header