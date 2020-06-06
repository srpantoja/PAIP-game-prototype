import React from 'react'
import './game.css'
import Hero from './Hero'
import Event from './Event'
export default function Game() {
    return (
        <div className='game-container'>
            <div className='game-grid'>
                <div className='game-map' />
                <Event name='checkpoint' left={50} top={301}/>
                <Event name='checkpoint' left={140} top={405}/>
                <Event name='checkpoint' left={387} top={450}/>
                <Event name='checkpoint' left={676} top={405}/>
                <Event name='checkpoint' left={825} top={450}/>
                <Event name='checkpoint' left={985} top={499}/>
                <Hero />
            </div>
        </div>

    )
}
