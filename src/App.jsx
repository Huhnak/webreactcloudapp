import React, {StrictMode, useEffect, useState} from 'react'
import LoginForm from './Components/LoginForm';
import Header from './Components/Header'
import Files from './Components/Files'
import MouseFolower from './Components/MouseFolower'
import LoginOnLoad from './Components/Containers/LoginOnLoad'
import GetDirectoriesTree from './Handlers/Requests';


const App = (props) => {
    const [isLoggined, setLoggined] = useState(false)
    const [directoriesTree, setDirectoriesTree] = useState(null)

    useEffect(()=>{
        LoginOnLoad({setLoggined: setLoggined})
        GetDirectoriesTree({setDirectoriesTree:setDirectoriesTree});
    },[]);

    const getRootDirectories = () => {
        const re = new RegExp(/^[a-zA-Z0-9А-Яа-я_\s\-()\[\]{}.]+/);
        const mapped = directoriesTree.Directories.map(item => re.exec(item)[0] );
        const res = mapped.filter((value, index, self)=> self.indexOf(value) === index)
        return res
    }

    return (
    <>
        <MouseFolower/>
        <Header setLoggined={setLoggined} isLoggined={isLoggined}/>
        {isLoggined ? <Files directories={getRootDirectories()}/> : <LoginForm setLoggined={setLoggined}/>}

    </>
    ) 
}

export default App