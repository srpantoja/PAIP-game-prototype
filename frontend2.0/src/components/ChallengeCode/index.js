import React from 'react'
import './style.css'
import { useState } from 'react';
import { connect } from 'react-redux'

import api from '../../services/api'
import { LOGIN } from '../../config/constants'

import { useHistory } from 'react-router-dom'

function Challenges(props) {
    const challenge = props.challengeId
    // props.challenge;
    const studentId = localStorage.getItem(LOGIN) // props.id// props.studentId;
    const [code, setCode] = useState("")

    const history = useHistory();
    async function handleCodeSubmission(e) {
        e.preventDefault()
        console.log('props.chllengeId: ' + props.challengeId)

        const jsonData = {
            challengeId: challenge.id, studentId, code
        }

        console.log(jsonData)
        const response = await api.post("/submit", jsonData)
        const submissionResult = response.data
        if (submissionResult.result) {
            alert("Sucesso!!!")
        } else {
            alert("Erro. Razão do erro: \n\n\n" + submissionResult.error)
        }
    }
    // console.log('testando challengerCode: ')

    const placeholder = "Ao ler a entrada, use sempre input(), sem nada dentro dos parênteses. Exemplo: int(input()) para ler um número.\nSeu programa não deve conter acentos. Caso contrário, o sistema irá apontar erro em sua solução.\nAs saídas do seu programa devem seguir o padrão exibido em 'Saída'\n\nBoa sorte!"

    return (
        <form onSubmit={handleCodeSubmission} id='form-code'>
            <div className='code-container'>
                <p className='text-questao'>CÓDIGO VENTURA :</p>
                <textarea value={code} onChange={e => setCode(e.target.value)} type='textarea' placeholder={placeholder} rows='5' cols='5' className='textarea-questao' />
                <input type='button' onClick={e => setCode("")} className='btn-questao' value='Limpar' />
                <button type='submit' value='enviar' className='btn-questao' > Enviar </button>
            </div>
        </form>

    )
}


function mapStateToProps(state) {
    return {
        tiles: state.map.tiles,
        position: state.player.position,
        id: state.player.id,
        challengeId: state.quest
    }
}

export default connect(mapStateToProps)(Challenges)