import React from 'react'

interface buttonProps {
    words?: string,
    style?: string,
    clicke?: string
}

const Button: React.FC<buttonProps> = ({
    words = "Default",
    style = "mt-2 flex items-center mt-2 bg-gray-200 p-1 rounded-lg px-2 group-hover:text-gray-700 h-20"
}) => {
    return (
        <div className={style} onClick={clicke}> {words} </div>
    )
}

export default Button