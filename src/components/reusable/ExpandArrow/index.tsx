import React from "react";
import './index.scss'

const ExpandArrow: React.FC<{className?: string}> = ({className}) => {
    return (
        <svg className={`ExpandArrow ${className}`} width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10H7Z" fill="#777777" />
        </svg>
    )
}

export default ExpandArrow;