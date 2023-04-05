import React from "react";
import {AiFillFolder} from 'react-icons/ai'
import {IoMdDocument} from 'react-icons/io'
import {VscError} from 'react-icons/vsc'
import mainStore from "../../Mobx/store";
import { Tooltip } from "./Tooltip";
import { FileContextMenu } from "./FileContextMenu";



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
    function classNameSwitch(type) {
        switch(type){
            case 'file':
                return 'File file-type-file'
            case 'folder':
                return 'File file-type-folder'
            default:
                return 'File'
        }
    }
    function handleClick(){
        if (props.type === 'folder')
            mainStore.pushCurrentDirectoryStack(props.title)    
    }
    return(
        <div className={classNameSwitch(props.type)}>
            {props.type === 'file' &&
            <FileContextMenu fileName={props.title}>
                <div className="icon">
                    {renderSwitch(props.type)}
                </div>
            </FileContextMenu>
            }
            {props.type === 'folder' &&
                <div className="icon" onClick={handleClick}>
                    {renderSwitch(props.type)}
                </div>
            }
            <Tooltip text={props.title}>
                <div className="title">{props.title}</div>
            </Tooltip>
        </div>
    )
}

export default File
