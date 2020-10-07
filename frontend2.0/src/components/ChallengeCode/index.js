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
    const handleBack = () => {
        history.push('/')
    }
    // console.log('testando challengerCode: ')
    return (
        <form onSubmit={handleCodeSubmission} id='form-code'>
            <div className='code-container'>
                <p className='text-questao'>CÓDIGO VENTURA ;</p>
                <p>{props.challengeId.name}</p>
                <textarea value={code} onChange={e => setCode(e.target.value)} type='textarea' placeholder='Codifique aqui' rows='5' cols='5' className='textarea-questao' />
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