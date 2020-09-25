import React from 'react'
import './style.css'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react';
import { dispatchQuest } from './dispatchQuest';
import api from '../../services/api'
import { QUEST } from '../../config/constants'


function Challenges(props) {

    const [quest, setQuest] = useState(false)
    const [challenge, setChallenge] = useState([])
    
    useEffect(() => {
        fetchChallenges()

    }, [props.jogando])


    async function fetchChallenges() {
        const response = await api.get("/challenges")
        // backend returns an list of challenges 
        setChallenge(response.data)
    }
    const challengeCollide = () => {
        challenge.map((item, index) => {
            if (props.position[0] === item.posX && props.position[1] === item.posY) {
                props.dispatchQuest(item)
                return <h1>Aperte Enter</h1>
            }
        })
    }

    return (
        <div className='text-container'>
            <div className='textbox'>
                <span className='text'>
                    {challengeCollide()}
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
