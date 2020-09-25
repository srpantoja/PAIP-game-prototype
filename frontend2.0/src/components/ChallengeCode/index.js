import React from 'react'
import './style.css'
import { useState } from 'react';
import { connect } from 'react-redux'

import api from '../../services/api'

function Challenges(props) {
    const challenge = props.quest
    // props.challenge;
    const studentId = props.id// props.studentId;
    const [code, setCode] = useState("")

    async function handleCodeSubmission() {
        const jsonData = {
            challengeId: challenge.challengeId, studentId, code
        }

        const response = await api.post("/submit", jsonData)
        const submissionResult = response.data
        if (submissionResult.result) {
            alert("Sucesso!!!")
        } else {
            alert("Erro. Razão do erro: \n\n\n" + submissionResult.error)
        }
    }

    return (
        <div className={`code-container`}>
            <p className='text-questao'>CÓDIGO VENTURA ;</p>
            <p>{props.id}</p>
            <textarea value={code} onChange={e => setCode(e.target.value)} type='textarea' placeholder='Codifique aqui' rows='5' cols='5' className='textarea-questao' />
            <input onClick={e => handleCodeSubmission()} type='button' value='enviar' className='btn-questao' />
        </div>
    )
}


function mapStateToProps(state) {
    return {
        tiles: state.map.tiles,
        position: state.player.position,
        id: state.player.id,
        quest: state.quest
    }
}

export default connect(mapStateToProps)(Challenges)