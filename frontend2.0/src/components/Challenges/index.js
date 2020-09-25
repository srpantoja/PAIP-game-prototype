import React from 'react'
import './style.css'
import { connect } from 'react-redux'
import { useState } from 'react';
import { dispatchQuest } from './dispatchQuest';
import api from '../../services/api'

function Challenges(props) {

    const [quest, setQuest] = useState(false)

    const challenge = {
        "_id": "5f0f749f4518ea38c9ec4e09",
        "name": "Matematica 1",
        "area": "1",
        "description": "Leia 2 valores inteiros e armazene-os nas variáveis A e B. Efetue a soma de A e B atribuindo o seu resultado na variável X. Imprima X conforme exemplo apresentado abaixo. Não apresente mensagem alguma além daquilo que está sendo especificado.",
        "inputFile": "/home/vinicius/Projects/PokePython/backend/data/challenges/Matematica 1-input.txt",
        "outputFile": "/home/vinicius/Projects/PokePython/backend/data/challenges/Matematica 1-output.txt",
        "__v": 0
    }

    async function fetchChallenges() {
        const response = await api.get("/challenges")
        
        // backend returns an list of challenges 
        const challenges = response.data
        console.log(challenges)
    }

    const teste = () =>{
        console.log(props.id)
        if(props.position[0] === 80 && props.position[1] === 80)
            return <h1>Aperte Enter</h1>
    }
    
    return (
        <div className='text-container'>
            <div className='textbox'>
                <img className='img' src={img} />
                <span className='text'>
                    {teste()}
                </span>
            </div>
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

const img = 'https://i.pinimg.com/736x/09/4c/64/094c64b1720cde9b40183ac4d038374f.jpg'

function mapDispatchToProps(dispatch) {
    return {
        loginValidation(type, quest) {
            const action = dispatchQuest(type, quest)
            dispatch(action)

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Challenges)
