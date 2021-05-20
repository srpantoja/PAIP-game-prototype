import React from 'react'

function Input(props) {
    return (
        <input type={props.type} className='form-control'
            id={`Input${props.type}`} placeholder={props.placeholder}
        />
    )
}

export {Input}