import React, { useState, useEffect } from 'react'
import useEventListener from '@use-it/event-listener'

export default function Teste() {

    const [posx, setPosx] = useState(0)
    const [posy, setPosy] = useState(0)

    const max_step = 4
    const offset = {
        top: 0,
        left: 0
    }
    const size = 64
    const directions = {
        DOWN: 0,
        LEFT: size * 1,
        RIGHT: size * 2,
        UP: size * 3
    }

    const position = {
        top: posy,
        left: posx
    }

    const [facing, setFacing] = useState({
        current: directions.DOWN,
        previous: directions.DOWN
    })
    const [step, setStep] = useState(0)


    useEventListener("keydown", ({ code }) => {
        if (code.indexOf("Arrow") === -1) return
        const auxdirection = code.replace("Arrow", "").toUpperCase()
        const direction = directions[auxdirection]
        setFacing(prevState => ({
            current: direction,
            previous: prevState.current
        }))

        if (auxdirection === 'DOWN')
            setPosy(posy + 50)
        else if (auxdirection === 'UP')
            setPosy(posy - 50)
        else if (auxdirection === 'LEFT')
            setPosx(posx - 50)
        else if (auxdirection === 'RIGHT')
            setPosx(posx + 50)
        console.log(position)
    })

    useEffect(() => {
        if (facing.current === facing.previous) {
            setStep(prevState => (prevState < max_step - 1 ? prevState + 1 : 0))
        } else {
            setStep(0)
        }
    }, [facing])

    return (
        <div >
            <div
                style={{
                    top: `${posy}px`,
                    left: `${posx}px`,
                    backgroundPosition: `-${offset.left + step * size}px -${offset.top + facing.current}px`
                }}
                className='hero'>

            </div>
        </div>

    )
}
