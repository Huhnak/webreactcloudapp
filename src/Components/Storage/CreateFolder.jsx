import React from "react";
import { CreateDirectory } from "../../Handlers/Requests";
import mainStore from "../../Mobx/store";
import { Tooltip } from "./Tooltip";
import { toJS } from "mobx";


export const CreateFolder = (props) => {

    function handleClick(){
        const dirName = prompt('Enter folder name')
        if (!dirName)
            return
        console.log(toJS(mainStore.currentDirectoryStack))
        const fullPath = toJS(mainStore.currentDirectoryStack).join('/')+(mainStore.currentDirectoryStack.length ? '/' : '')+ dirName + '/'

        console.log(fullPath)
        console.log(dirName)
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