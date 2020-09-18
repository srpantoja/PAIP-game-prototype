import React from 'react'
import './style.css'
import MainGame from '../../components/MainGame'
import { Link } from 'react-router-dom'

function MainPage() { //Tela inicial do jogo. Local de login.
    return (
        <MainGame>
            <div className='button-container'>
                <input type="text" placeholder='usuario' />
                <input type='password' placeholder='senha' />
                <Link to='/game'>
                    Entrar
                </Link>
            </div>
        </MainGame >
    )
}

export default MainPage
