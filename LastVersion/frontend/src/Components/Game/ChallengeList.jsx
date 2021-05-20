import React, { useState } from 'react'
import { Card, CardBody, CardHeader } from '../bootstrapComponents/Cards'
import { Button } from '../bootstrapComponents/Forms'
import { Col, Row } from '../bootstrapComponents/Grids'
import axios from 'axios'
import './clickableRow.css'

export default function ChallengeList(props) {
    const challengeList = props.challenges
    const setSelectedChallenge = props.setSelectedChallenge

    function handleChallengeClick(challenge) {
        setSelectedChallenge(challenge)
    } 

    return (
        <div style={{ left: '25%', top: '25%', position: 'absolute' }}>
            <Card text='white' bg='secondary'>
                <CardHeader text='white' bg='secondary'>
                    <Col center>{props.stage}</Col>
                </CardHeader>
                <CardBody text='secondary' bg='white' >
                    {
                        challengeList.map(challenge =>
                            <div onClick={e => handleChallengeClick(challenge)} className="clickableRow" key={challenge._id}>
                                <Row>
                                    <Col center>
                                        {challenge.name}
                                    </Col>
                                </Row>
                            </div>
                        )
                    }
                </CardBody>
            </Card>
        </div>

    )
}
