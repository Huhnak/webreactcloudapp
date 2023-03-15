import React, { useEffect } from 'react'
import store from '../../Mobx/store'
import File from './File'
import { observer } from "mobx-react-lite";

const Files = (props) => {
    return(
        <>
            {Object.keys(store.getCurrentDirectoriesAndFiles().directory).map(item => (<File key={item} type={'folder'} title={item}/>))}
            {Object.values(store.getCurrentDirectoriesAndFiles().file).map(item => (<File key={item} type={'file'} title={item}/>))}
        </>
    )
}
export default observer(Files)
//{store.filteredDirectories.map(item => (<File key={item} type={'folder'} title={item}/>))}