import React, { useState, useEffect } from 'react'
import useEventListener from '@use-it/event-listener'

export default function Hero(props) {

    const [posx, setPosx] = useState(40)
    const [posy, setPosy] = useState(270)

    const max_step = 4
    const [step, setStep] = useState(1)

    const size = 64
    const directions = {
        DOWN: 0,
        LEFT: size * 1,
        RIGHT: size * 2,
        UP: size * 3
    }

    const [facing, setFacing] = useState({
        current: directions.DOWN,
        previous: directions.DOWN
    })

    const move = (key) => {
        if (key === 'DOWN')
            down_move()
        else if (key === 'UP')
            up_move()
        else if (key === 'LEFT')
            left_move()
        else if (key === 'RIGHT')
            right_move()
    }

    const left_move = () => {
        setPosx(posx - 16)
    }
    const right_move = () => {
        setPosx(posx + 16)
    }
    const up_move = () => {
        setPosy(posy - 16)
    }
    const down_move = () => {
        setPosy(posy + 16)
    }

    useEventListener("keydown", ({ code }) => {
        if (code.indexOf("Arrow") === -1)
            return
        const auxdirection = code.replace("Arrow", "").toUpperCase()
        const direction = directions[auxdirection]
        setFacing(prevState => ({
            current: direction,
            previous: prevState.current
        }))
        move(auxdirection)
        console.log("renderizando..")
    })

    useEffect(() => {
        if (facing.current === facing.previous) {
            setStep(prevState => (prevState < max_step - 1 ? prevState + 1 : 0))
        } else {
            setStep(0)
        }
    }, [facing])

    return (
        <div
            style={{
                top: posy,
                left: posx,
                backgroundPosition: `-${ step * size}px -${facing.current}px`
            }}
            className='hero' />
    )
}
