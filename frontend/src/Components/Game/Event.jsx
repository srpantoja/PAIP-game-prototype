import React from 'react'
import Challenger from './Challenger'

export default function Event(props) {
    return (
        <>
            <div className={props.name} style={{ left: props.info.x, top: props.info.y }} />
            {
                props.stage === props.info.stage
                &&
                props.press === true
                &&
                <Challenger stage={props.info.stage} />

            }
        </>
    )
}
