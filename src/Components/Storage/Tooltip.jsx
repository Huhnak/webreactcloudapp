import React, {useState, useEffect} from "react";


export const Tooltip = ({text, children}) => {
    const [isVisible, setIsVisible] = useState(false)
    const [textDelayHandler, setTextDelayHandler] = useState(null)
    const [tootipDelayHandler, setTooltipDelayHandler] = useState(null)
    const [isTooltipSelected, setIsTooltipSelected] = useState(false)
    const [isTextSelected, setIsTextSelected] = useState(false)
    // const handleTextMouseEnter = event => {
    //     setDelayHandler( setTimeout(() => {
    //         setIsVisible(true)
    //     }, 500))
    // }
    // const handleTextMouseLeave = () => {
    //     if (!isTooltipSelected){
    //         clearTimeout(delayHandler)
    //         setIsVisible(false)
    //     }
    // }
    const handleTextMouseEnter = event => {
        setTextDelayHandler( setTimeout(() => {
            setIsTextSelected(true)
        }, 500))        
        
    }
    const handleTextMouseLeave = () => {
        clearTimeout(textDelayHandler)
        setIsTextSelected(false)
    }
    const handleTooltipMouseEnter = () => {
        clearTimeout(tootipDelayHandler)
        setIsTooltipSelected(true)
    }
    const handleTooltipMouseLeave = () => {
        setTooltipDelayHandler(setTimeout(() => {
            setIsTooltipSelected(false)
        }, 200))   
        
    }
    useEffect(()=>{
        if (isTextSelected | isTooltipSelected)
            setIsVisible(true)
        if (!isTextSelected & !isTooltipSelected)
            setIsVisible(false)
    },[isTextSelected, isTooltipSelected])
    return(
        <div
            className="tooltip-container"
            onMouseEnter={handleTextMouseEnter}
            onMouseLeave={handleTextMouseLeave}
        >
            {children}
            {isVisible &&
                <div
                    className="tooltip"
                    onMouseEnter={handleTooltipMouseEnter}
                    onMouseLeave={handleTooltipMouseLeave}
                >
                    {text}
                </div>
            }

        </div>
    )
}
