import axios from "axios";
import {configWithBearer, configWithBearerFormData} from "../axiosConfig";
import mainStore from "../Mobx/store";


export const GetDirectoriesTree = () => {
    return new Promise( (resolve) => {
        console.log('GetDirectoriesTree config >', configWithBearer())
        axios.get('/filemanager/getDirectoriesTree', configWithBearer()).then((response)=>{
            console.log('Request GetDirectoriesTree >', response.data)
            mainStore.setStringedDirectoriesTree(response.data)
        }).then(()=>{resolve()})
    })
}

export const CreateDirectory = (directoryPath) => {
    var bodyFormData = new FormData()
    bodyFormData.append('DirectoryPath', directoryPath)
    console.log('CreateDirectory >', bodyFormData)
    axios.post('/filemanager/createDirectory', bodyFormData, configWithBearerFormData()).then((response) => {
        console.log('CreateDirectory >', response.data)
    }).then(()=>{
        GetDirectoriesTree()
    }).catch((response) => {
        alert(response.response.data.message)
    })
}
export const UploadFileOnServer = (filesFormData) => {
    axios.post('/filemanager/upload', filesFormData, configWithBearerFormData()).then((response) => {
        console.log('UploadFileOnServer >', response.data)
        GetDirectoriesTree()
    }).catch((response) => {
        console.log('UploadFileOnServer catch >', response.data)
        alert(response.data)
    })
}
export const DownloadFile = async (fileName, directoryPath) => {
    var formData = new FormData()
    formData.append('FileName', fileName)
    formData.append('DirectoryPath', directoryPath)
    var result
    await axios.post('/filemanager/download', formData, {...configWithBearerFormData(), responseType: 'blob'}).then((response) => {
        result=response
        console.log('DownloadFile >', response.data)
    }).catch((response)=>{
        alert(response.data)
        console.log('DownloadFile catch >', response.data)
    })
    return result.data
}
export const DeleteFile = async (fileName, directoryPath) => {
    var formData = new FormData()
    formData.append('FileName', fileName)
    formData.append('DirectoryPath', directoryPath)
    await axios.post('/filemanager/deleteFile', formData, configWithBearerFormData()).then((response) => {
        console.log('DeleteFile >', response.data)
        GetDirectoriesTree()
    }).catch((response)=>{
        alert(response.data)
        console.log('DeleteFile catch >', response.data)
    })
}
export const RenameFile = async (fileName, directoryPath, newFileName) => {
    var formData = new FormData()
    formData.append('FileName', fileName)
    formData.append('DirectoryPath', directoryPath)
    formData.append('NewFileName', newFileName)
    await axios.post('/filemanager/renameFile', formData, configWithBearerFormData()).then((response) => {
        console.log('RenameFile >', response.data)
        GetDirectoriesTree()
    }).catch((response)=>{
        alert(response.data)
        console.log('RenameFile catch >', response.data)
    })
}
export const RenameDirectory = async (newDirectoryName, directoryPath) => {
    var formData = new FormData()
    formData.append('DirectoryPath', directoryPath)
    formData.append('NewDirectoryName', newDirectoryName)
    await axios.post('/filemanager/renameDirectory', formData, configWithBearerFormData()).then((response) => {
        console.log('RenameDirectory >', response.data)
        GetDirectoriesTree()
    }).catch((response)=>{
        alert(response.data)
        console.log('RenameDirectory catch >', response.data)
    })
}
export const DeleteDirectoryNotRecursively = async (directoryPath) => {
    var formData = new FormData()
    formData.append('DirectoryPath', directoryPath)
    await axios.post('/filemanager/deleteDirectoryNotRecursively', formData, configWithBearerFormData()).then((response) => {
        console.log('DeleteDirectoryNotRecursively >', response.data)
        GetDirectoriesTree()
    }).catch((response)=>{
        alert(response.data)
        console.log('DeleteDirectoryNotRecursively catch >', response.data)
    })
}
export const DeleteDirectoryRecursively = async (directoryPath) => {
    var formData = new FormData()
    formData.append('DirectoryPath', directoryPath)
    await axios.post('/filemanager/deleteDirectoryRecursively', formData, configWithBearerFormData()).then((response) => {
        console.log('DeleteDirectoryRecursively >', response.data)
        GetDirectoriesTree()
    }).catch((response)=>{
        alert(response.data)
        console.log('DeleteDirectoryRecursively catch >', response.data)
    })
}
export const GetUserSpace = async () => {
    let result
    await axios.get('/filemanager/userSpace', configWithBearer())
    .then((response) => {
        result = response.data
        console.log('GetUserSpace >', response.data)
    }).catch((response)=>{
        alert(response.data)
        console.log('GetUserSpace catch >', response.data)
    })
    return result
}