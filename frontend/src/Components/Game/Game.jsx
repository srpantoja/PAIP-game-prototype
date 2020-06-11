import React, { useState, useEffect } from 'react'
import './game.css'
import Hero from './Hero'
import Event from './Event'
import useEventListener from '@use-it/event-listener'

export default function Game() {
    const default_stages = [
        { x: 50, y: 301 },
        { x: 145, y: 405 },
        { x: 387, y: 450 },
        { x: 676, y: 405 },
        { x: 825, y: 450 },
        { x: 985, y: 499 },
    ]

    const [posx, setPosx] = useState(50)
    const [posy, setPosy] = useState(285)

    const max_step = 4
    const [step, setStep] = useState(0)

    const size = 48
    const keys = {
        DOWN: 0,
        LEFT: size * 1,
        RIGHT: size * 2,
        UP: size * 3
    }

    const [facing, setFacing] = useState({
        current: keys.DOWN,
        previous: keys.DOWN
    })

    const action_key = (key) => {
        if (key === 'DOWN') {
            let timerId = setTimeout(function tick() {
                console.log(posy)
                setPosy(posy + 12)
                timerId = setTimeout(tick, 1000); // (*)
            }, 1000);
        } else if (key === 'UP')
            setPosy(posy - 12)
        else if (key === 'LEFT')
            setPosx(posx - 12)
        else if (key === 'RIGHT')
            setPosx(posx + 12)
        else if (key === 'ENTER')
            alert('EVENTO')
    }

    useEventListener("keydown", ({ code }) => {
        if (code.indexOf("Arrow") === -1)
            return action_key(code.toUpperCase())
        const code_key = code.replace("Arrow", "").toUpperCase()
        const key = keys[code_key]
        setFacing(prevState => ({
            current: key,
            previous: prevState.current
        }))
        action_key(code_key)
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
            <div className='game-map' />
            {default_stages.map((item, index) =>
                <Event name='checkpoint' pos={item} />
            )}
            <Hero
                posy={posy}
                posx={posx}
                step={step}
                size={size}
                facing={facing}
            />
        </div>

    )
}
