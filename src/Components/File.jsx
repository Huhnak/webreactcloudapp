import React from "react";
import {AiFillFolder} from 'react-icons/ai'
import {IoMdDocument } from 'react-icons/io'
import {VscError} from 'react-icons/vsc'
import store from "../Redux/store";


const File = (props) => {
    function renderSwitch(param) {
        switch(param){
            case 'file':
                return <IoMdDocument/>
            case 'folder':
                return <AiFillFolder/>
            default:
                return <VscError/>
        }
    }
    function handleClick(){
        store.setCurrentDirectory(props.title+'/')
        store.setFilteredDirectories(store.getUniqueDirectories())
        store.getFilesCurrentDirectory()
    }
    return(
        <div className="File" onClick={handleClick}>
            <div className="icon">
                {renderSwitch(props.type)}
            </div>
            <div className="title">{props.title}</div>
        </div>
    )
}

export default File
