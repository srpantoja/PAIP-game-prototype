import React from 'react'

export default function Button(props) {
    const outline = () => {
        if(props.outline) return '-outline'
        return ''
    }
    const block = () => {
        if(props.block) return 'btn-md btn-block'
        return ''
    }
    return (
        <button type="button" className={`btn btn${outline()}-${props.color} ${block()}`} >
            {props.children}
        </button>

    )
}
