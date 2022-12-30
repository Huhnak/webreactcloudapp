import React, {useState} from "react";

const Header = (props) => {
    const [title, setTitle] = useState("My first react app");
    const handleClick = () => {
        props.setCurrentDirectory(null);
        props.setDirectoriesTree(null);
        props.setLoggined(false);
    }
    return(
        <header className="header">
            <div className="title">{title}</div>
            {props.isLoggined && <div className="logout" onClick={handleClick}>LogOut</div>}
        </header>
    );

}

export default Header
