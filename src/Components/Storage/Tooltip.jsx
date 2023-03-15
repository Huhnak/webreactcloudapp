import React, {useState} from "react";


export const Tooltip = ({text, children}) => {
    const [isVisible, setIsVisible] = useState(false)
    const [delayHandler, setDelayHandler] = useState(null)
    const handleMouseEnter = event => {
        setDelayHandler( setTimeout(() => {
            setIsVisible(true)
        }, 500))
    }
    const handleMouseLeave = () => {
        clearTimeout(delayHandler)
        setIsVisible(false)
    }
    return(
        <div
            className="tooltip-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {isVisible && <div className="tooltip">{text}</div>}

        </div>
    )
}
