import React from 'react'
import { Card, CardBody, CardHeader } from '../bootstrapComponents/Cards'
import { Button } from '../bootstrapComponents/Forms'
import { Col } from '../bootstrapComponents/Grids'

function LoadGame() {
    return (
        <div>
            <div className='cf' />
            <div style={{ left: '35%', top: '35%', position: 'absolute' }} >
                <Card text='white' bg='dark' opacity>
                    <CardHeader>
                        <Col center>Digite seu nome</Col>
                    </CardHeader>
                    <CardBody>
                        <form>
                            <Col>
                                <input type='text' className='form-control' placeholder='Digite seu nome' />
                            </Col>
                            <p></p>
                            <Col center>
                                <Button color='light' outline block>Confirmar</Button>
                            </Col>
                        </form>
                    </CardBody>
                </Card>

            </div>
        </div>
    )
}

export { LoadGame }
