import React, {useState} from "react";
import GetDirectoriesTree from "../Handlers/Requests";
import store from "../Redux/store";


const Header = (props) => {
    const [title, setTitle] = useState("My first react app");
    const handleClick = () => {
        store.currentDirectory = null;
        store.directoriesTree = null;
        store.filteredDirectories = null;
        store.isLoggined = false;
        GetDirectoriesTree();
    }
    return(
        <header className="header">
            <div className="title">{title}</div>
            {store.isLoggined && <div className="logout" onClick={handleClick}>LogOut</div>}
        </header>
    );

}

export default Header
