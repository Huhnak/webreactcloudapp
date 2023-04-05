import { observer } from "mobx-react-lite";
import React from "react";
import Files from "./Files";
import UpToDirectory from "./UpToDirectory"
import mainStore from "../../Mobx/store";
import { CreateFolder } from "./CreateFolder";
import { UploadFile } from "./UploadFile";
import DirectoryPath from "../DirectoryPath";

const StorageWrapper = (props) => {
    return (
        <>
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
