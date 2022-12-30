import React, {useEffect, useState} from 'react'
import LoginForm from './Components/LoginForm';
import Header from './Components/Header'
import MouseFolower from './Components/MouseFolower'
import LoginOnLoadAsync from './Components/Containers/LoginOnLoad'
import {connect} from 'react-redux'
import StorageWrapper from './Components/StorageWrapper';


const App = (props) => {
    const [isLoggined, setLoggined] = useState(false)
    const [directoriesTree, setDirectoriesTree] = useState()
    const [currentDirectory, setCurrentDirectory] = useState(null)
    const [filteredDirectories, setFilteredDirectories] = useState({})
    // Пытаюсь тут сделать вызовы асинхронно так как древо не может получаться на логине LoginOnLoadAsync
    useEffect(()=>{
        let some = [
            "123/",
            "123/",
            "my new directory/",
            "Новая папка/",
            "my new directory/ .gdfgdfg/",
            "my new directory/123123/",
            "my new directory/ .gdfgdfg /))))))/",
            "my new directory/ .gdfgdfg /))))))/Новая папка/"
        ]
        console.log(some.filter((value, index, self)=> self.indexOf(value) === index))
        // debugger;
        LoginOnLoadAsync({setLoggined: setLoggined, setDirectoriesTree: setDirectoriesTree})
        setFilteredDirectories(getUniqueDirectories(currentDirectory))
        // LoginOnLoad({setLoggined: setLoggined, setDirectoriesTree: setDirectoriesTree})
        // setFilteredDirectories(getUniqueDirectories(currentDirectory))
    },[]);
    useEffect(()=>{
        getUniqueDirectories(currentDirectory);
    }, directoriesTree)

    //    test\/dgdfgdf\/
    function getUniqueDirectories(originDirectory){
        let regex = null;
        if (!originDirectory)
            regex = new RegExp('^[\\wА-я_\\s\\-()\\[\\]{}.]+');
        else
            regex = new RegExp(`^${originDirectory}[\\wА-я_\\s\\-()\\[\\]{}.]+`);
        const filteredMap = directoriesTree.Directories.map(item => regex.exec(item))
        const filtered = filteredMap.map(item => item[0].trim()).filter((value, index, self)=> self.indexOf(value) === index);
        const result = filtered.map(item => item.split('/').at(-1));
        console.log(result);
        return result
    }
    return (
    <>
        <MouseFolower/>
        <Header setLoggined={setLoggined} isLoggined={isLoggined} setCurrentDirectory={setCurrentDirectory} setDirectoriesTree={setDirectoriesTree}/>
        {isLoggined ? <StorageWrapper filteredDirectories={filteredDirectories}/> : <LoginForm setLoggined={setLoggined} setDirectoriesTree={setDirectoriesTree}/>}
    </>
    )
}

export default App;
