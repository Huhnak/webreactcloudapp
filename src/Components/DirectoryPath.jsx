import React from "react";
import mainStore from "../Mobx/store";
import { observer } from "mobx-react-lite";


const DirectoryPath = (props) => {

    return(
        <div className="DirectoryPath">
            <p>{'My drive' + (mainStore.currentDirectoryStack.length ?' > ' : '')+mainStore.currentDirectoryStack.join(' > ')}</p>
        </div>
    )
}

export default observer(DirectoryPath)