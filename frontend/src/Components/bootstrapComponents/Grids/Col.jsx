import React from 'react'

export default function Col(props) {
    const position = () => {
        if(props.center) return 'text-center'
        if(props.left) return 'text-left'
        if(props.right) return 'text-right'
    }

    return (
        <div className={`col ${position()} `}>
            {props.children}
        </div>
    )
}
