import { observer } from "mobx-react-lite";
import React from "react";
import Files from "./Files";
import UpToDirectory from "./UpToDirectory"
import store from "../../Mobx/store";
import { CreateFolder } from "./CreateFolder";
import { UploadFile } from "./UploadFile";

const StorageWrapper = (props) => {
    return (
        <div className='StorageWrapper'>
            <div className="uploadFile-createFolder">
                <CreateFolder/>
                <UploadFile/>
            </div>
            {store.currentDirectoryStack.length > 0 && <UpToDirectory/>}
            <Files/>
        </div>
    )
}

export default observer(StorageWrapper);
