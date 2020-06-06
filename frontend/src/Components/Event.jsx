import React from 'react'

export default function Event(props) {
    return (
        <div className={props.name} style={{left: props.left, top: props.top}}/>
    )
}
