import {React, useRef} from "react";
import mainStore from "../../Mobx/store";
import { Tooltip } from "./Tooltip";
import { UploadFileOnServer } from "../../Handlers/Requests";
import { toJS } from "mobx";


export const UploadFile = (props) => {
    const inputFile = useRef(null) 
    function handleClick(){ 
        inputFile.current.click()
    }
    function onInputChange(event){
        let filesFormData = new FormData()
        if (!event.target.files.length)
            return  
        for (let i=0; i <event.target.files.length; i++){
            filesFormData.append('Files', event.target.files[i])
        }
        let fullPath = null
        if (mainStore.currentDirectoryStack.length === 0)
            fullPath = '/'
        else
            fullPath = toJS(mainStore.currentDirectoryStack).join('/')+'/'
        filesFormData.append('path', fullPath.toString())
        UploadFileOnServer(filesFormData)
        
    }
    return(
        <Tooltip text={'Upload files'}>
            <input type='file' multiple id='file' ref={inputFile} style={{display:'none'}} onChange ={onInputChange}/>
            <div className="UploadFile" onClick={handleClick}>
                <p>Upload files</p>
            </div>
        </Tooltip>
        
    )
}