import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import Files from "./Files";
import UpToDirectory from "./UpToDirectory"
import mainStore from "../../Mobx/store";
import { CreateFolder } from "./CreateFolder";
import { UploadFile } from "./UploadFile";
import DirectoryPath from "../DirectoryPath";
import { GetUserSpace } from "../../Handlers/Requests";
import ProgressBar from "@ramonak/react-progress-bar";

const StorageWrapper = (props) => {

    const [userSpace, setUserSpace] = useState([null, null])

    useEffect(()=>{
        GetUserSpace().then(result => {
            setUserSpace(result)
        })
        
    },[mainStore.stringedDirectoriesTree]) 
    
    return (
        <>
        <ProgressBar completed={(userSpace[1]/userSpace[0]*100).toFixed(2)} />
        <p>{(userSpace[1]/1024/1024).toFixed(2)}Mb / {userSpace[0]/1024/1024}Mb</p>
        <DirectoryPath/>
        <div className='StorageWrapper'>
            <div className="uploadFile-createFolder">
                <CreateFolder/>
                <UploadFile/>
            </div>
            {mainStore.currentDirectoryStack.length > 0 && <UpToDirectory/>}
            <Files/>
        </div>
        </>
    )
}

export default observer(StorageWrapper);
