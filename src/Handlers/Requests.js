import axios from "axios";
import config from "../axiosConfig";

const GetDirectoriesTree = (props) => {
    axios.get("/filemanager/getDirectoriesTree", config).then((response)=>{
        console.log('Request GetDirectoriesTree >', response.data)
        props.setDirectoriesTree(response.data)
    })
}
export default GetDirectoriesTree