import React from "react";
import { CreateDirectory } from "../../Handlers/Requests";
import store from "../../Mobx/store";
import { Tooltip } from "./Tooltip";
import { toJS } from "mobx";


export const CreateFolder = (props) => {

    function handleClick(){
        const dirName = prompt('Enter folder name')
        const fullPath = toJS(store.currentDirectoryStack).join('/')+(store.currentDirectoryStack>0 ? '/' : '')+ dirName + '/'
        CreateDirectory(fullPath)
    }
    return(
        <Tooltip text={'Create folder'}>
            <div className="CreateFolder" onClick={handleClick}>
                <p>Create folder</p>
            </div>
        </Tooltip>
        
    )
}