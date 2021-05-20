import React, { useState } from 'react'
import { Card, CardBody, CardHeader } from '../bootstrapComponents/Cards'
import { Button } from '../bootstrapComponents/Forms'
import { Col, Row } from '../bootstrapComponents/Grids'
import axios from 'axios'
import './clickableRow.css'

export default function Challenger(props) {
    const challenge = props.challenge
    const setSelectedChallenge = props.setSelectedChallenge
    const [fileToSubmit, setFileToSubmit] = useState({})
    const [hasSubmitResult, setHasSubmitResult] = useState(false)
    const [submitResult, setSubmitResult] = useState(false)
    const studentId = props.studentId

    function handleSubmit(event) {
        event.preventDefault()

        const jsonData = {
            studentId,
            challengeId: challenge._id
        }

        const data = new FormData()
        data.append('data', JSON.stringify(jsonData))
        data.append('code', fileToSubmit)

        async function axiosSubmit() {
            const request = axios({
                method: 'post',
                url: 'http://localhost:8000/submit',
                data: data
            })

            const response = await request
            setHasSubmitResult(true)
            console.log(response.data)
            setSubmitResult(response.data.result)
        }

        axiosSubmit()
    }

    return (
        <div style={{ left: '25%', top: '25%', position: 'absolute' }}>
            <Card text='white' bg='secondary'>
                <CardHeader text='white' bg='secondary'>
                    <Col center>{props.stage}</Col>
                </CardHeader>
                <CardBody text='secondary' bg='white' >
                    <Row>
                        <Col center>
                            {challenge.name}
                        </Col>

                    </Row>
                    <Row>
                        <Col center>
                            Descrição da questão:
                        </Col>
                    </Row>
                    <Row>
                        <Col center>
                            {challenge.description}
                        </Col>
                    </Row>
                    <Row>
                        <Col center>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input onChange={e => setFileToSubmit(e.target.files[0])} type="file" className="form-control-file" id="exampleFormControlFile1" />
                                    <input type="submit" value="Enviar"/>
                                </div>
                            </form>
                        </Col>
                    </Row>

                    { hasSubmitResult &&
                    (submitResult ?
                    (<Row>
                        <Col center>
                            sucesso
                        </Col>
                    </Row>) :
                    (<Row>
                        <Col center>
                            falha
                        </Col>
                    </Row>))   
                    }

                    <div onClick={e => setSelectedChallenge(undefined)} className="clickableRow">
                        <Row>
                            <Col center>
                                Voltar
                            </Col>
                        </Row>
                    </div>
                </CardBody>
            </Card>
        </div>

    )
}
