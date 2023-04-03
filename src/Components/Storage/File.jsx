import FileSaver from "file-saver";
import React from "react";
import {AiFillFolder} from 'react-icons/ai'
import {IoMdDocument } from 'react-icons/io'
import {VscError} from 'react-icons/vsc'
import { DownloadFile } from "../../Handlers/Requests";
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
    function handleClick(){
        if (props.type === 'folder')
            mainStore.pushCurrentDirectoryStack(props.title)
        else if (props.type === 'file'){
            var fileData = undefined
            const directoryPath = mainStore.currentDirectoryStack.join('/')+'/'
            DownloadFile(props.title, directoryPath)
            .then((response) => {
                fileData = response
                const blobFile = new Blob([fileData])
                console.log(blobFile)
                blobFile !== undefined && FileSaver.saveAs(blobFile, props.title)
            })
        
        }
    }
    return(
        <div className="File" onClick={handleClick}>
            <FileContextMenu>
                <div className="icon">
                    {renderSwitch(props.type)}
                </div>
            </FileContextMenu>
            
            <Tooltip text={props.title}>
                <div className="title">{props.title}</div>
            </Tooltip>
        </div>
    )
}

export default File
