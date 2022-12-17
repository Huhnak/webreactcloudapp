import React from "react";
import {AiFillFolder} from 'react-icons/ai'
import {IoMdDocument } from 'react-icons/io'
import {VscError} from 'react-icons/vsc'

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
    return(
        <div className="File">
            <div className="icon">
                {renderSwitch(props.type)}
            </div>
            <div className="title">{props.title}</div>
        </div>
        
    )
    
}

export default File
