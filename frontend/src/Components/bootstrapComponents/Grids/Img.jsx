import React from 'react'

function Img(props) {
    return (
        <div className={props.name} style={{widht:props.widht, height:props.height}} />
    )
}
export {Img} 
