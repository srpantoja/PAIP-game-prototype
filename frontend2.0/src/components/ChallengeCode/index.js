import React from 'react'
import './style.css'
import { useState } from 'react';
import { connect } from 'react-redux'

import api from '../../services/api'

function Challenges(props) {
    const challenge = props.challengeId
    // props.challenge;
    const studentId = props.id// props.studentId;
    const [code, setCode] = useState("")

    async function handleCodeSubmission() {
        console.log('props.chllengeId: ' + props.challengeId)

        const jsonData = {
            challenge, studentId, code
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
    console.log('testando challengerCode: ' + challenge)
    return (
        <div className={`code-container`}>
            <p className='text-questao'>CÓDIGO VENTURA ;</p>
            <p>{props.challengeId}</p>
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
        challengeId: state.quest.id
    }
}

export default connect(mapStateToProps)(Challenges)