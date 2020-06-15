import React from 'react'

export default function Hero(props) {
    return (
        <div>
            
            <div
                style={{
                    top: props.posy,
                    left: props.posx,
                    backgroundPosition: `-${props.step * props.size}px -${props.facing.current}px`
                }}
                className='hero' />
        </div>
    )
}
