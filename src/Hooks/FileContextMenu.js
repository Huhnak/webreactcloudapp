import { DeleteDirectoryNotRecursively, DeleteDirectoryRecursively, DeleteFile, DownloadFile, RenameDirectory, RenameFile } from "../Handlers/Requests";
import FileSaver from "file-saver";
import mainStore from "../Mobx/store";

export const useFileContextMenu = () => {
    const fileDownloadHandleClick = (fileName) => {
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

    const fileDeleteHandleClick = (fileName) => {
        const directoryPath = mainStore.currentDirectoryStack.join('/')+'/'
        DeleteFile(fileName, directoryPath)
    }

    const fileRenameHandleClick = (fileName) => {
        const newFileName = prompt('Enter new file name', fileName)
        if (!newFileName)
            return
        const directoryPath = mainStore.currentDirectoryStack.join('/')+'/'
        RenameFile(fileName, directoryPath, newFileName)
    }
    const folderRenameHandleClick = (directoryName) => {
        const newDirectoryName = prompt('Enter new directory name', directoryName)
        if (!newDirectoryName | newDirectoryName===directoryName)
            return
        const directoryPath = mainStore.currentDirectoryStack.length
            ? mainStore.currentDirectoryStack.join('/')+'/'+directoryName+'/'
            : directoryName+'/'
        RenameDirectory(newDirectoryName, directoryPath)
    }
    const folderDeleteHandleClick = (directoryName) => {
        const directoryPath = mainStore.currentDirectoryStack.length
            ? mainStore.currentDirectoryStack.join('/')+'/'+directoryName+'/'
            : directoryName+'/'
        if(mainStore.isDirectoryEmpty(directoryName))
            DeleteDirectoryNotRecursively(directoryPath)
        else{
            let result = window.confirm('The directory is not empty, are you sure you want to delete the directory')
            if (result)
                DeleteDirectoryRecursively(directoryPath)
        }

    }

    return [fileDownloadHandleClick, fileDeleteHandleClick ,fileRenameHandleClick, folderRenameHandleClick, folderDeleteHandleClick];
}

