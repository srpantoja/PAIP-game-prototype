import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import MainGame from '../../components/MainGame'
function MainPage() { //Serve para direcionar para a página de login ou de registro.
    return (
        <MainGame>
            <div className='button-container'>
                <Link to='/login'>
                    Entrar
                </Link>
                <Link to='/register'>
                    Registrar
                </Link>
            </div>
        </MainGame >
    )
}

export default MainPage
