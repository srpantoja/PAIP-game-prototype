import React, { useState } from 'react'
import { Card, CardBody, CardHeader } from '../bootstrapComponents/Cards'
import { Button } from '../bootstrapComponents/Forms'
import { Col, Row } from '../bootstrapComponents/Grids'

export default function Challenger(props) {
    return (
        <div style={{ left: '25%', top: '25%', position: 'absolute' }}>
            <Card text='white' bg='secondary'>
                <CardHeader text='white' bg='secondary'>
                    <Col center>{props.stage}</Col>
                </CardHeader>
                <CardBody text='secondary' bg='white' >
                    <Row>
                        <Col center>
                            Aprendendo a somar
                        </Col>
                        <Col center>
                            Matemática
                        </Col>
                    </Row>
                    <Row>
                        <Col center>
                            Descrição da questão:
                            <p>Faça uma questão que some toda entrada em +1</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col center>
                            Exemplos de entrada:
                            <p>1 --- 2</p>
                            <p>3 --- 4</p>
                            <p>9 --- 10</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col center>
                            <form>
                                <div className="form-group">
                                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                </div>
                            </form>
                        </Col>
                    </Row>

                </CardBody>
            </Card>
        </div>

    )
}
