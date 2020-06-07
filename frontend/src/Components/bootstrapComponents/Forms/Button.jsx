import React from 'react'

function Button(props) {

    const click = () => {
        props.mouse_click()
    }

    const outline = () => {
        if(props.outline) return '-outline'
        return ''
    }
    const block = () => {
        if(props.block) return 'btn-md btn-block'
        return ''
    }
    return (
        <button type="button" onClick={click} className={`btn btn${outline()}-${props.color} ${block()}`} >
            {props.children}
        </button>

    )
}

export {Button}
