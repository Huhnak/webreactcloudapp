import React, { useEffect } from 'react'
import store from '../Redux/store'
import File from './File'

const Files = (props) => {
    return(
        <div className='Files'>
            {store.filteredDirectories.map(item => (<File key={item} type={'folder'} title={item}/>))}
        </div>
    )


}

export default Files
