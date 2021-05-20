import React, { useState } from 'react'
import { Card, CardBody } from '../bootstrapComponents/Cards'
import { Button } from '../bootstrapComponents/Forms'
import { Col } from '../bootstrapComponents/Grids'

function RegisterQuestions() {

    const [question, setQuestion] = useState('none')
    const [answer, setAnswer] = useState('none')

    const submit = () => {
        if(question === 'none' || answer === 'none') {
            alert('Preencha todos os campos')
            return
        } else if (question === '' || answer === '') {
            alert('Preencha todos os campos')
            return
        } 
    }

    return (
        <div>
            <div className="cf"> 
            <div style={{position: 'absolute', left: '10%', top: '15%', width: '80%'}}>
                <Card text='white' bg='dark'>
                    <CardBody>
                        <Col center>
                            <strong>Cadastro de questões</strong>
                        </Col>
                        <form>
                            <Col> 
                            <textarea style={{resize: 'none', marginTop: '20px'}} type='text' rows='4' className='form-control' placeholder='Enunciado da questão' 
                                onChange={(event) => setQuestion(event.target.value)}></textarea>
                            </Col>
                            <Col>
                            <textarea style={{resize: 'none', marginTop: '20px', marginBottom: '20px'}} type='text' rows='4' className='form-control' placeholder='Resposta da questão' 
                                onChange={(event) => setAnswer(event.target.value)}></textarea>
                            </Col>
                            <Col center>
                                <Button mouse_click={submit} color='light' outline block>Confirmar</Button>
                            </Col>
                        </form>
                    </CardBody>
                </Card>
            </div>
            </div>
        </div>
    )
}

export {RegisterQuestions}