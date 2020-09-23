import React from 'react'
import './style.css'
import MainGame from '../../components/MainGame'
import { Link, Redirect } from 'react-router-dom'
import { useState } from 'react'
import api from '../../services/api'

function MainPage() { //Tela inicial do jogo. Local de login.
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)

    async function handleLogin() {
        // em caso de erro a api retorna json no formato {status: "<razao do erro>"}
        const requestPromise = await api.post("/students/login", {login, password}).catch(err => alert(err.response.data.status))
        
        // sucesso
        if (requestPromise) {
            setLoggedIn(true)
        }
    }

    if (loggedIn) {
        return <Redirect to="/game" />
    }

    return (
        <MainGame>
            <form className='button-container'>
                <input 
                    onChange={e => setLogin(e.target.value)}
                    type="text" 
                    value={login} 
                    placeholder='usuario' 
                />
                <input 
                    onChange={e => setPassword(e.target.value)}
                    type='password' 
                    placeholder='senha'
                    value={password} 
                />
                <Link onClick={e => handleLogin()}>
                    Entrar
                </Link>
            </form>
        </MainGame >
    )
}

export default MainPage
