import React from 'react'

export default function Hero(props) {
    return (
        <div>
            <strong style={{
                top: props.posy + 48,// posy + 48,
                left: props.posx - 13,//posx - 13,
                position: 'absolute',
                color: 'white',
                fontSize: '12px'
            }}>Jean Pantoja</strong>
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
