import React, {useState} from "react";

export const FileContextMenu = ({buttons, children}) => {
    const [isVisible, setIsVisible] = useState(false)
    const [delayHandler, setDelayHandler] = useState(null)
    const handleMouseEnter = event => {
        setDelayHandler( setTimeout(() => {
            setIsVisible(true)
        }, 100))
    }
    const handleMouseLeave = () => {
        clearTimeout(delayHandler)
        setIsVisible(false)
    }
    return(
        <div
            className="file-context-menu-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {isVisible &&
            <div className="file-context-menu">
                {buttons}
            </div>}

        </div>
    )
}
