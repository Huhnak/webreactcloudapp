import axios from "axios";
import {config, configWithBearerFormData} from "../axiosConfig";
import mainStore from "../Mobx/store";


export const GetDirectoriesTree = () => {
    return new Promise( (resolve) => {
        console.log('GetDirectoriesTree config >', config)
        axios.get('/filemanager/getDirectoriesTree', {...config, headers:{'Authorization':`Bearer ${localStorage.getItem('jwtToken')}`}}).then((response)=>{
            console.log('Request GetDirectoriesTree >', response.data)
            mainStore.setStringedDirectoriesTree(response.data)
        }).then(()=>{resolve()})
    })
}

export const CreateDirectory = (directoryPath) => {
    var bodyFormData = new FormData()
    bodyFormData.append('DirectoryPath', directoryPath)
    console.log('CreateDirectory >', bodyFormData)
    axios.post('/filemanager/createDirectory', bodyFormData, configWithBearerFormData).then((response) => {
        console.log('CreateDirectory >', response.data)
    }).then(()=>{
        GetDirectoriesTree().then()
    }).catch((response) => {
        alert(response.response.data.message)
    })
}
export const UploadFileOnServer = (filesFormData) => {
    axios.post('/filemanager/upload', filesFormData, configWithBearerFormData).then((response) => {
        console.log('UploadFileOnServer >', response.data)
        GetDirectoriesTree().then()
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
    await axios.post('/filemanager/download', formData, {...configWithBearerFormData, responseType: 'blob'}).then((response) => {
        result=response
        console.log('DownloadFile >', response.data)
    }).catch((response)=>{
        alert(response.data)
        console.log('DownloadFile catch >', response.data)
    })
    return result.data
}