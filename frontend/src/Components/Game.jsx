import React from 'react'
import './game.css'
import Hero from './Hero'
export default function Game() {
    return (
        <div className='game-container'>
            <div className='game-grid'>
                <Hero></Hero>
            </div>
        </div>

    )
}
