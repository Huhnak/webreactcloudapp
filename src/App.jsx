import React, {useEffect, useState} from 'react'
import LoginForm from './Components/LoginForm';
import Header from './Components/Header'
import MouseFolower from './Components/MouseFolower'
import LoginOnLoadAsync from './Components/Containers/LoginOnLoad'
import { observer } from "mobx-react-lite";
import store from './Redux/store';
import StorageWrapper from './Components/StorageWrapper';


const App = (props) => {
    //const [isLoggined, setLoggined] = useState(false)
    // const [directoriesTree, setDirectoriesTree] = useState()
    // const [currentDirectory, setCurrentDirectory] = useState(null)
    //const [filteredDirectories, setFilteredDirectories] = useState({})
    // Пытаюсь тут сделать вызовы асинхронно так как древо не может получаться на логине LoginOnLoadAsync
    useEffect(()=>{
        // debugger;
        LoginOnLoadAsync()
        // LoginOnLoad({setLoggined: setLoggined, setDirectoriesTree: setDirectoriesTree})
        // setFilteredDirectories(getUniqueDirectories(currentDirectory))
    },store.isLoggined);
    useEffect(()=>{
        console.log("fdjohgjkfdjkfdghjkfdjkgfdhjk")
    }, store.directoriesTree)
    return (
    <>
        <MouseFolower/>
        <Header/>
        {store.isLoggined ? <StorageWrapper/> : <LoginForm/>}
    </>
    )
}

export default observer(App);
