import React from 'react'
import './style.css'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react';
import { dispatchQuest } from './dispatchQuest';
import api from '../../services/api'
import { LOGIN, QUEST } from '../../config/constants'



function Challenges(props) {
    const initialState = {
        id: null,
        name: null,
        area: null,
        description: null,
        inputFile: null,
        outputFile: null,
        __v: null,
        posX: null,
        posY: null

    }

    const [currentQuest, setCurrentQuest] = useState(initialState)
    const [questList, setQuestList] = useState([])
    const login = localStorage.getItem(LOGIN)
    useEffect(() => {
        api.get("/challenges")
            .then(response => {
                setQuestList(response.data)
            })
    }, [login])

    useEffect(() => {
        questList.map((item, index) => {
            if (props.position[0] === item.posX && props.position[1] === item.posY) {
                console.log("aqui")
                console.log(item)
                setCurrentQuest(item)
                return props.dispatchQuest(QUEST, item)
            } else {
                setCurrentQuest(initialState)
                props.dispatchQuest(QUEST, initialState)
            }

        })
    }, [props.position[0], props.position[1]])

    const renderChallenge = () => {
        const jogando = localStorage.getItem('jogando')

        console.log(jogando)
        if (jogando === true) {
            return (
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Area</th>
                            <th>Descrição</th>
                            {/* <th>Entrada</th>
                        <th>Saída</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{currentQuest.name}</td>
                            <td>{currentQuest.area}</td>
                            <td>{currentQuest.description}</td>
                            {/* <td>{currentQuest.input}</td>
                        <td>{currentQuest.output}</td> */}
                        </tr>
                    </tbody>
                </table>
            )
        }
        else {
            return <></>
        }
    }

    return (
        <div className='text-container'>
            <div className='textbox'>
                <span className='text'>
                    {renderChallenge()}
                </span>
            </div>
        </div>


    )
}

function mapStateToProps(state) {
    return {
        tiles: state.map.tiles,
        position: state.player.position,
        id: state.player.id,
    }
}


function mapDispatchToProps(dispatch) {
    return {
        dispatchQuest(type, quest) {
            const action = dispatchQuest(type, quest)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Challenges)
