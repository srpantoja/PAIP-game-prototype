import React from 'react'
import './style.css'
import { useState } from 'react';
import { connect } from 'react-redux'

import api from '../../services/api'

function Challenges(props) {
    const challenge = {
        "_id": "5f0f749f4518ea38c9ec4e09",
        "name": "Matematica 1",
        "area": "1",
        "description": "Leia 2 valores inteiros e armazene-os nas variáveis A e B. Efetue a soma de A e B atribuindo o seu resultado na variável X. Imprima X conforme exemplo apresentado abaixo. Não apresente mensagem alguma além daquilo que está sendo especificado.",
        "inputFile": "/home/vinicius/Projects/PokePython/backend/data/challenges/Matematica 1-input.txt",
        "outputFile": "/home/vinicius/Projects/PokePython/backend/data/challenges/Matematica 1-output.txt",
        "__v": 0
    }

    // props.challenge;
    const studentId = "5f0f75264518ea38c9ec4e0b"// props.studentId;
    const [code, setCode] = useState("")

    async function handleCodeSubmission() {
        const jsonData = {
            challengeId: challenge.challengeId, studentId, code
        }

        const response = await api.post("/submit", jsonData)
        const submissionResult = response.data
        console.log(props.id)
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
        id: state.player.id //importante, dispara a renderização do mapa
    }
}

export default connect(mapStateToProps)(Challenges)