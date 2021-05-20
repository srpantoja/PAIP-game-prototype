import React from 'react'

function CardHeader(props) {
    return (
        <div className={`card-header text-${props.text} bg-${props.bg}`}>
            {props.children}        
        </div> 
    )
}

export {CardHeader}
