import React from "react";
import Files from "./Files";

const StorageWrapper = (props) => {
    return (
        <Files filteredDirectories={props.filteredDirectories}/>
    )
}

export default StorageWrapper;
