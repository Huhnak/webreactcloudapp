import React from 'react'

class Files extends React.Component{
    files = [
        {
            id: 0,
            userId: 3,
            name: "music.mp3",
            size: 5678966,
            serverIP: "185.100.24.195",
            localPath: "my new directory/123123/"
        },
        {
            id: 1,
            userId: 5,
            name: "Voprosy.docx",
            size: 24434,
            serverIP: "185.100.24.195",
            localPath: "my new directory/"
        },
        {
            id: 2,
            userId: 3,
            name: "[ RUTOR.ORG ] 779573.torrent",
            size: 565464564,
            serverIP: "185.100.24.195",
            localPath: "my new directory/ .gdfgdfg /))))))/"
        }
    ]
    render(){
        if(this.files.length>0)
            return(
                <div className='filesList'>
                    {this.files.map(f => (
                        <div className='file' key={f.id}>
                            <h3>{f.id} {f.name}</h3>
                            <p>{f.size}</p>
                            <p>{f.localPath}</p>
                            <p>{f.serverIP}</p>
                            <p>{f.userId}</p>
                        </div>
                    ))}
                </div>
            )
        else
            return(
                <div className='filesList'>
                    <h3>Files not found</h3>
                </div>
            )
    }
}

export default Files