import React from "react";
import {AiFillFolder} from 'react-icons/ai'
import {IoMdDocument } from 'react-icons/io'
import {VscError} from 'react-icons/vsc'
import store from "../../Mobx/store";
import { Tooltip } from "./Tooltip";


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
        if (props.type === 'folder')
            store.pushCurrentDirectoryStack(props.title)
    }
    return(
        <div className="File" onClick={handleClick}>
            <div className="icon">
                {renderSwitch(props.type)}
            </div>
            <Tooltip text={props.title}>
                <div className="title">{props.title}</div>
            </Tooltip>
        </div>
    )
}

export default File
