import React, { useState, useEffect } from 'react'
import './game.css'
import Hero from './Hero'
import Event from './Event'
import useEventListener from '@use-it/event-listener'
import Challenger from './Challenger'
import api from '../../api/index'

export default function Game(props) {
    let studentId = "5f0f472886b44e227b99dbe3"
    if (props.location.state) {
        studentId = props.location.state.studentId
    }

    const default_stages = [
        { stage: 'Informações necessárias', x: 50, y: 295 },
        { stage: 'Biblioteca do centro de tecnologia', x: 140, y: 400 },
        { stage: 'Biblioteca de Sistemas e Midias Digitais', x: 387, y: 450 },
        { stage: 'Biblioteca de Matemática', x: 676, y: 405 },
        { stage: 'Biblioteca de Física', x: 825, y: 450 },
        { stage: 'Biblioteca de Química', x: 985, y: 499 },
    ]

    const [stageQuestions, setStageQuestions] = useState()

    useEffect(() => {
        async function fetchChallenges() {
            const apiResponse = await api.challenges()
            const challenges = apiResponse.data

            function challengesReducer(result, currentChallenge) {
                const currentStage = default_stages[currentChallenge.area].stage

                if (result[currentStage]) {
                    result[currentStage].push(currentChallenge)
                    return result
                }
                
                result[currentStage] = [currentChallenge]
                return result
            }

            const stageToChallenge = challenges.reduce(challengesReducer, {})
            console.log(stageToChallenge)
            setStageQuestions(stageToChallenge)
        }

        fetchChallenges()
    }, [])

    const [key_press, setKey_press] = useState(false)

    const [stage, setStage] = useState('Informações necessárias')

    const [posx, setPosx] = useState(50)
    const [posy, setPosy] = useState(275)

    const max_step = 4
    const [step, setStep] = useState(0)

    const size = 48
    const keys = {
        DOWN: 0,
        LEFT: size * 1,
        RIGHT: size * 2,
        UP: size * 3
    }

    const [facing, setFacing] = useState({
        current: keys.DOWN,
        previous: keys.DOWN
    })

    const action_key = (key) => {
        if (key === 'DOWN') {
            setPosy(posy + 10)
        } else if (key === 'UP')
            setPosy(posy - 10)
        else if (key === 'LEFT')
            setPosx(posx - 10)
        else if (key === 'RIGHT')
            setPosx(posx + 10)
        else if (key === 'ENTER' && stage !== 'null') {
            if (key_press === false)
                setKey_press(true)
            else
                setKey_press(false)
        }
    }

    useEventListener("keydown", ({ code }) => {
        if (code.indexOf("Arrow") === -1)
            return action_key(code.toUpperCase())
        const code_key = code.replace("Arrow", "").toUpperCase()
        const key = keys[code_key]
        setFacing(prevState => ({
            current: key,
            previous: prevState.current
        }))
        action_key(code_key)

    })

    useEffect(() => {
        if (facing.current === facing.previous) {
            setStep(prevState => (prevState < max_step - 1 ? prevState + 1 : 0))
        } else {
            setStep(0)
        }
    }, [facing])

    const colision = (event_x, event_y) => {
        if (event_x < posx + 48 &&
            event_x + 48 > posx &&
            event_y < posy + 48 &&
            event_y + 48 > posy) {
            console.log('teste')
            return true
        } return false
    }

    useEffect(() => {
        console.log('y: ' + posy + 'x: ' + posx)
        let colide = false
        default_stages.map((item, index) => {
            if (colision(item.x, item.y)) {
                colide = true
                return setStage(item.stage)
            }
        })
        if (colide === false) {
            setStage('null')
            setKey_press(false)
        }
        console.log(stage)
    }, [posy, posx])

    return (
        <div>
            <div className='game-map' />
            {default_stages.map((item, index) =>
                <Event name='checkpoint' studentId={studentId} challenges={stageQuestions && stageQuestions[item.stage]} info={item} stage={stage} press={key_press} />
            )}
            <Hero
                posy={posy}
                posx={posx}
                step={step}
                size={size}
                facing={facing}
            />
        </div>

    )
}
