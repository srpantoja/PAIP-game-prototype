import React, { useState, useEffect } from 'react'
import useEventListener from '@use-it/event-listener'

export default function Hero(props) {

    const [posx, setPosx] = useState(50)
    const [posy, setPosy] = useState(285)

    const max_step = 4
    const [step, setStep] = useState(0)

    const size = 48
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
            for_n(8, () => setPosy(posy + 12))
        else if (key === 'UP')
            for_n(8, () => setPosy(posy - 12))
        else if (key === 'LEFT')
            for_n(8, () => setPosx(posx - 12))
        else if (key === 'RIGHT')
            for_n(8, () => setPosx(posx + 12))
    }

    const for_n = (index, item) => {
        for (let i = 0; i < index; i++) {
            item()
        }
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
        <div>
            <strong style={{
                top: posy + 48,
                left: posx - 13,
                position: 'absolute',
                color: 'white',
                fontSize: '12px'
            }}>Jean Pantoja</strong>
            <div
                style={{
                    top: posy,
                    left: posx,
                    backgroundPosition: `-${step * size}px -${facing.current}px`
                }}
                className='hero' />
        </div>
    )
}
