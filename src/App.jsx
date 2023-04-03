import React, {useEffect} from 'react'
import LoginForm from './Components/LoginForm';
import Header from './Components/Header'
import LoginOnLoad from './Components/Containers/LoginOnLoad'
import { observer } from "mobx-react-lite";
import mainStore from './Mobx/store';
import StorageWrapper from './Components/Storage/StorageWrapper';

const App = (props) => {
    useEffect(()=>{
        LoginOnLoad()
    },[]);
    return (
    // <MouseFolower/>
    <>
        <Header/>
        {mainStore.isLoggined ? <StorageWrapper/> : <LoginForm/>}
    </>
    )
}

export default observer(App);
