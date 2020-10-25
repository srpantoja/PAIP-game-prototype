import React from 'react'
import './style.css'

function MainPage(props) { // adiciona o título do jogo
    return (
        <div className='game-container'>
            <h2 className='title'>CÓDIGO VENTURA :</h2>
            {props.children}
        </div>
    )
}

export default MainPage
