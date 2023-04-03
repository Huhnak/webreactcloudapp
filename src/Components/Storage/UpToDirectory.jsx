import React from "react";
import {IoMdArrowBack} from 'react-icons/io'
import mainStore from "../../Mobx/store";


const UpToDirectory = (props) => {
    function handleClick(){
        mainStore.popCurrentDirectoryStack()
    }
    return(
        <div className="UpToDirectory" onClick={handleClick}>
            <div className="icon">
                <IoMdArrowBack/>
            </div>
            <div className="title">{props.title}</div>
        </div>
    )
}

export default UpToDirectory
