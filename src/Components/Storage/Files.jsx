import React from 'react'
import mainStore from '../../Mobx/store'
import File from './File'
import { observer } from "mobx-react-lite";

const Files = (props) => {
    return(
        <>
            {Object.keys(mainStore.getCurrentDirectoriesAndFiles().directory).map(item => (<File key={item} type={'folder'} title={item}/>))}
            {Object.values(mainStore.getCurrentDirectoriesAndFiles().file).map(item => (<File key={item} type={'file'} title={item}/>))}
        </>
    )
}
export default observer(Files)