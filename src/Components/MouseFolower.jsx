import React from 'react'

class MouseFolower extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            mousepos: {
                x:0,
                y:0,
            },
            size: 50,
            transformSize: 1,
            opacity: 0.03
        }
    }
    handleMouseMove = (event) => {
        this.setState({mousepos: {
            x: event.pageX,
            y: event.pageY
        }});
    }
    handleScroll = (event) => {
        this.setState({mousepos: {
            x: event.pageX,
            y: event.pageY
        }});
    }
    handleMouseDown = (event) => {
        this.setState({
            transformSize: 0.5,
            opacity: 0.1
        })
    }
    handleMouseUp = (event) => {
        this.setState({
            transformSize: 1,
            opacity: 0.03
        })
    }
    componentDidMount(){
        window.addEventListener('mousedown', this.handleMouseDown)
        window.addEventListener('mouseup', this.handleMouseUp)
        window.addEventListener('mousemove', this.handleMouseMove)
        window.addEventListener('wheel', this.handleScroll)
    }
    componentWillUnmount(){
        window.removeEventListener('mousedown', this.handleMouseDown)
        window.removeEventListener('mouseup', this.handleMouseUp)
        window.removeEventListener('mousemove', this.handleMouseMove)
        window.removeEventListener('wheel', this.handleScroll)
    }

    render(){
        return(
            <div className='mouseFolower' style={{
                transform: `translate(${this.state.mousepos.x-this.state.size/2}px, ${this.state.mousepos.y-this.state.size/2}px)`, 
            }}>
                <div className='scale' style={{
                    transform: `scale(${this.state.transformSize})`,
                    transitionProperty: 'transform opacity',
                    transitionDuration: '200ms',
                    height: this.state.size,
                    width: this.state.size,
                    opacity: `${this.state.opacity}`,
                }}>

                </div>
            </div>
            // <div className='mouseFolower' style={{
            //         transform: `translate(${this.state.mousepos.x-this.state.size/2}px, ${this.state.mousepos.y-this.state.size/2}px) scale(${this.state.transformSize})`, 
            //         transitionProperty: 'transform opacity',
            //         transitionDuration: '200ms',
            //         height: this.state.size,
            //         width: this.state.size,
            //         opacity: `${this.state.opacity}`
            //     }}>
            //     </div>
        )
    }
}

export default MouseFolower