import React, {useState} from "react";
import logOut from "../Handlers/logOut";

const Header = (props) => {
    const [title, setTitle] = useState("My first react app");
    const setLoggined = props.setLoggined;
    const isLoggined = props.isLoggined;
    const handleClick = () => {
        setLoggined(false)
        logOut(props.setDirectoriesTree);
    }
    return(
        <header className="header">
            <div className="title">{title}</div>
            {isLoggined && <div className="logout" onClick={handleClick}>LogOut</div>}
        </header>
    );
    
}

export default Header