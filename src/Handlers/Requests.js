import axios from "axios";
import { observer } from "mobx-react-lite";
import config from "../axiosConfig";
import store from "../Redux/store";


const GetDirectoriesTree = (props) => {
    axios.get("/filemanager/getDirectoriesTree", config).then((response)=>{
        console.log('Request GetDirectoriesTree >', response.data)
        store.setDirectoriesTree(response.data)
        store.setFilteredDirectories(store.getUniqueDirectories())
    })
}
export default GetDirectoriesTree
