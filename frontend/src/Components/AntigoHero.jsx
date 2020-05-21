import React, { useState, useEffect } from 'react'
import hero from '../assets/hero.png'

import herofront from '../assets/hero_walk/front_stop.png'
import heroleft from '../assets/hero_walk/left_stop.png'
import heroright from '../assets/hero_walk/right_stop.png'
import heroback from '../assets/hero_walk/back_stop.png'

export default function AntigoHero() {

    const [posx, setPosx] = useState(0)
    const [posy, setPosy] = useState(0)
    const [img, setImg] = useState(herofront)

    useEffect(() => {
        window.addEventListener("keydown", KeyDown)
        function KeyDown(event) {
            switch (event.keyCode) {
                case 37://LEFT
                    setPosx(posx - 50)
                    setImg(heroleft)

                    break
                case 38://UP
                    setPosy(posy - 50)
                    setImg(heroback)
                    break
                case 39://RIGHT
                    setPosx(posx + 50)
                    setImg(heroright)
                    break
                case 40://DOWN
                    setPosy(posy + 50)
                    setImg(herofront)
                    break
                default:
                    break
            }
        }

        return () => {
            window.removeEventListener("keydown", KeyDown)
        }
    }, [posx, posy])

    const style = {
        top: posy,
        left: posx
    }

    return (
        <div >
            <img className='hero' src={img} style={style} />
        </div>
    )
}
