import axios from "axios";
import { observer } from "mobx-react-lite";
import {config, configWithBearerFormData} from "../axiosConfig";
import store from "../Mobx/store";


export const GetDirectoriesTree = (props) => {
    axios.get("/filemanager/getDirectoriesTree", config).then((response)=>{
        console.log('Request GetDirectoriesTree >', response.data)
        store.setStringedDirectoriesTree(response.data)
    })
}

export const CreateDirectory = (directoryPath) => {
    var bodyFormData = new FormData()
    bodyFormData.append('DirectoryPath', directoryPath)
    console.log('CreateDirectory', bodyFormData)
    axios.post('/filemanager/createDirectory', bodyFormData, configWithBearerFormData).then((response) => {
        console.log('CreateDirectory >', response.data)
    }).then(()=>{
        GetDirectoriesTree()
    }).catch((response) => {
        alert(response.response.data.message)
    })
}
export const UploadFileOnServer = (filesFormData) => {
    var bodyFormData = filesFormData
    axios.post('/filemanager/upload', bodyFormData, configWithBearerFormData).then((response) => {
        console.log('UploadFileOnServer >', response.data)
        GetDirectoriesTree()
    }).catch((response) => {
        console.log('UploadFileOnServer catch >', response.data)
    })
}
