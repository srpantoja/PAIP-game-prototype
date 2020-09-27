import React from 'react'
import './style.css'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react';
import { dispatchQuest } from './dispatchQuest';
import api from '../../services/api'
import { LOGIN, QUEST} from '../../config/constants'


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
                console.log(item)
                return props.dispatchQuest(QUEST, item)
            }else{
                props.dispatchQuest(QUEST, initialState)
            }
            
        })
    }, [props.position[0], props.position[1]])

    const renderChallenge = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Area</th>
                        <th>Descrição</th>
                        <th>Entrada</th>
                        <th>Saída</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jim</td>
                        <td>00001</td>
                        <td>Blue</td>
                    </tr>
                </tbody>
            </table>
        )
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
        jogando: state.player.jogando
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
