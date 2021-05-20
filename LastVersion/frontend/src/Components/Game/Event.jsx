import React from 'react'
import Challenger from './Challenger'
import ChallengeList from './ChallengeList'
import { useState } from 'react'

export default function Event(props) {
    const [selectedChallenge, setSelectedChallenge] = useState()
    const challenges = props.challenges
    const studentId = props.studentId
    return (
        <>
            <div className={props.name} style={{ left: props.info.x, top: props.info.y }} />
            {
                props.stage === props.info.stage
                &&
                props.press === true
                &&
                (selectedChallenge ?
                <Challenger
                    studentId={studentId}
                    setSelectedChallenge={setSelectedChallenge}
                    challenge={selectedChallenge} 
                    stage={props.info.stage} 
                /> :
                
                <ChallengeList 
                    setSelectedChallenge={setSelectedChallenge} 
                    challenges={challenges} 
                    stage={props.info.stage} 
                />)
            }
        </>
    )
}
