import React from 'react'

export default function Img(props) {
    return (
        <div className={props.name} style={{widht:props.widht, height:props.height}} />
    )
}
