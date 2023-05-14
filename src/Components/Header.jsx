import React, {useState} from "react";
import mainStore from "../Mobx/store";


const Header = (props) => {
    const [title] = useState("Cloud");
    const handleClick = () => {
        mainStore.clearCurrentDirectoryStack();
        mainStore.setStringedDirectoriesTree(null);
        mainStore.setIsLoggined(false);
    }
    return(
        <header className="header">
            <div className="title">{title}</div>
            {mainStore.isLoggined && <div className="logout" onClick={handleClick}>LogOut</div>}
        </header>
    );

}

export default Header
