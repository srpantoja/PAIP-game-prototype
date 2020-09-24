import React from 'react'
import './style.css'
import { useState } from 'react';
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

    const [quest, setQuest] = useState(false)
    // props.challenge;
    const studentId = "5f0f75264518ea38c9ec4e0b"// props.studentId;
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

    const visibilityDiv = () => {
        if(quest == true)
            return 'visi-true'
        else if(quest == false)
            return 'visi-false'
    }
    return (
        <div className={`code-container ${visibilityDiv()}`}>
            <p className='text-questao'>{challenge.name}</p>
            <textarea value={code} onChange={e => setCode(e.target.value)} type='textarea' placeholder='Codifique aqui' rows='5' cols='5' className='textarea-questao' />
            <input onClick={e => handleCodeSubmission()} type='button' value='enviar' className='btn-questao' />
        </div>
    )
}

const img = 'https://i.pinimg.com/736x/09/4c/64/094c64b1720cde9b40183ac4d038374f.jpg'

export default Challenges