import React from 'react'
import './style.css'
import MainGame from '../../components/MainGame'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import api from '../../services/api'
import { connect } from 'react-redux'
import { loginValidation } from './loginValidation'


function MainPage(props) { //Tela inicial do jogo. Local de login.
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();

    const [requestPromise, setRequestPromise] = useState()
    async function handleLogin(e) {
        e.preventDefault();
        try{
            const studentJson = await api.post("/students/login", { login, password })
            setRequestPromise(studentJson.data.studentId)
            history.push('/game')
            localStorage.setItem('LOGIN', studentJson.data.studentId)
            alert('Login Efetuado com sucesso, espere o jogo carregar')
        }catch(err){
            alert('falha no login, tente novamente');
        }
    }

    return (
        <MainGame>
            <form className='button-container' onSubmit={handleLogin}>
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
                <button type='submit'>
                    Entrar
                </button>
                <button onClick={e=>history.push('/')} > Voltar </button>
            </form>
        </MainGame >
    )
}



function mapDispatchToProps(dispatch) {
    return {
        loginValidation(type, studentId) {
            const action = loginValidation(type, studentId)
            dispatch(action)
        }
    }
}


export default connect(null, mapDispatchToProps)(MainPage)