import React, { useState, useEffect } from 'react'
import hero from '../assets/hero.png'
export default function Hero () {

    const [posx, setPosx] = useState(0)
    const [posy, setPosy] = useState(0)

    useEffect(() => {
        window.addEventListener("keydown", KeyDown)
        function KeyDown(event) {
            let varx = posx
            let vary = posy
            console.log(varx, vary)
            switch (event.keyCode) {
                case 37://LEFT
                    setPosx(posx - 50)
                    break
                case 38://UP
                    setPosy(posy - 50)
                    break
                case 39://RIGHT
                    setPosx(posx + 50)
                    break
                case 40://DOWN
                    setPosy(posy + 50)
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
        <div>
            <img className='hero' src={hero} style={style}/>
        </div>
    )
}
