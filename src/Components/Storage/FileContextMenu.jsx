import React, {useState} from "react";
import {HiPencil, HiDownload} from 'react-icons/hi'
import {MdDelete} from 'react-icons/md'
import mainStore from "../../Mobx/store";
import { DeleteFile, DownloadFile, RenameFile } from "../../Handlers/Requests";
import FileSaver from "file-saver";


export const FileContextMenu = ({fileName, children, buttons}) => {
    const [isVisible, setIsVisible] = useState(false)
    const [delayHandler, setDelayHandler] = useState(null)
    const handleMouseEnter = event => {
        setDelayHandler( setTimeout(() => {
            setIsVisible(true)
        }, 100))
    }
    const handleMouseLeave = () => {
        clearTimeout(delayHandler)
        setIsVisible(false)
    }
    const downloadHandleClick = (fileName) => {
        var fileData = undefined
        const directoryPath = mainStore.currentDirectoryStack.join('/')+'/'
        DownloadFile(fileName, directoryPath)
        .then((response) => {
            fileData = response
            const blobFile = new Blob([fileData])
            console.log(blobFile)
            blobFile !== undefined && FileSaver.saveAs(blobFile, fileName)
        })
    }
    const deleteHandleClick = (fileName) => {
        const directoryPath = mainStore.currentDirectoryStack.join('/')+'/'
        DeleteFile(fileName, directoryPath)
    }
    const renameHandleClick = (fileName) => {
        const newFileName = prompt('Enter new filename', fileName)
        if (!newFileName)
            return
        const directoryPath = mainStore.currentDirectoryStack.join('/')+'/'
        RenameFile(fileName, directoryPath, newFileName)
    }
    return(
        <div
            className="file-context-menu-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {isVisible &&
            <div className="file-context-menu">
                <HiDownload onClick={()=>{downloadHandleClick(fileName)}}/>
                <HiPencil onClick={()=>{renameHandleClick(fileName)}}/>
                <MdDelete  onClick={()=>{deleteHandleClick(fileName)}}/>
            </div>}

        </div>
    )
}
