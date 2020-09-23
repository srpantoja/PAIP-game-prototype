import React from 'react'
import './style.css'
import { connect } from 'react-redux'

function Challenges(props) {

    const quest =  [360,80]
    const challenge = {
        "_id": "5f0f749f4518ea38c9ec4e09",
        "name": "Matematica 1",
        "area": "1",
        "description": "Leia 2 valores inteiros e armazene-os nas variáveis A e B. Efetue a soma de A e B atribuindo o seu resultado na variável X. Imprima X conforme exemplo apresentado abaixo. Não apresente mensagem alguma além daquilo que está sendo especificado.",
        "inputFile": "/home/vinicius/Projects/PokePython/backend/data/challenges/Matematica 1-input.txt",
        "outputFile": "/home/vinicius/Projects/PokePython/backend/data/challenges/Matematica 1-output.txt",
        "__v": 0
    }

    const teste = () =>{
        console.log(props.position)
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
        position: state.player.position //importante, dispara a renderização do mapa
    }
}

const img = 'https://i.pinimg.com/736x/09/4c/64/094c64b1720cde9b40183ac4d038374f.jpg'

export default connect(mapStateToProps)(Challenges)
