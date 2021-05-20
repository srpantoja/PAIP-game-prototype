import React from 'react'
import { Card, CardBody, CardHeader } from '../bootstrapComponents/Cards'
import { Button } from '../bootstrapComponents/Forms'
import { Col } from '../bootstrapComponents/Grids'
import { useState } from 'react'
import { Redirect } from 'react-router-dom';

function LoadGame() {
    const [userName, setUserName] = useState("")
    const [redirect, setRedirect] = useState(false)

    function handleUserName(e) {
        if (userName.toLowerCase() == 'admin') {
            setRedirect(true)
        }
    }

    if (redirect) {
        return <Redirect to={{
            state: {
                "studentId": "5f0f472886b44e227b99dbe3"
            },
            pathname: "/game"
        }}/>
    }

    return (
        <div>
            <div className='cf' />
            <div style={{ left: '35%', top: '35%', position: 'absolute' }} >
                <Card text='white' bg='dark' opacity>
                    <CardHeader>
                        <Col center>Digite seu nome</Col>
                    </CardHeader>
                    <CardBody>
                        <form onSubmit={e => e.preventDefault()}>
                            <Col>
                                <input onChange={e => setUserName(e.target.value)} type='text' className='form-control' placeholder='Digite seu nome' />
                            </Col>
                            <p></p>
                            <Col center>
                                <Button mouse_click={handleUserName} color='light' outline block>Confirmar</Button>
                            </Col>
                        </form>
                    </CardBody>
                </Card>

            </div>
        </div>
    )
}

export { LoadGame }
