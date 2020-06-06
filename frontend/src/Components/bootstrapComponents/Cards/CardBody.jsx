import React from 'react'

export default function CardBody(props) {
    return (
        <div className={`card-body text-${props.text} bg-${props.bg}`}>
            {props.children}
        </div>
    )
}
