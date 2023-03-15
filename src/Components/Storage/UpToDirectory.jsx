import React from "react";
import {IoMdArrowBack} from 'react-icons/io'
import store from "../../Mobx/store";


const UpToDirectory = (props) => {
    function handleClick(){
        store.popCurrentDirectoryStack()
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
