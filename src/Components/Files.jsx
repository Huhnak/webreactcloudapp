import React, { useEffect } from 'react'
import File from './File'

const Files = (props) => {
    return(
        <div className='Files'>
            {props.filteredDirectories.map(item => (<File key={item} type={'folder'} title={item}/>))}
        </div>
    )


}

export default Files
