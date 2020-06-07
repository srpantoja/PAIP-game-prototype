import React, { useState } from 'react'
import { Card, CardBody, CardHeader } from '../bootstrapComponents/Cards'
import { FormGroup, Button } from '../bootstrapComponents/Forms'
import { Col, Row } from '../bootstrapComponents/Grids'

function NewGame() {

    const [selected, setSelected] = useState('none')
    const [opacity_man, setOpacity_man] = useState(0.6)
    const [opacity_woman, setOpacity_woman] = useState(0.6)
    const [name, setName] = useState('none')

    const click_man = () => {
        setOpacity_man(1)
        setOpacity_woman(0.6)
        setSelected('man')
    }
    const click_woman = () => {
        setOpacity_woman(1)
        setOpacity_man(0.6)
        setSelected('woman')
    }

    const submit = () => {
        if (selected === 'none' && name === 'none') {
            alert('Campos não preenchidos')
            return
        }
        else if (selected === 'none') {
            alert('Selecione Seu Personagem')
            return
        }else if (name === 'none') {
            alert('Digite Seu Nome')
            return
        }

    }

    return (
        <div>
            <div className='cf' />
            <div style={{ left: '35%', top: '25%', position: 'absolute' }} >
                <Card text='white' bg='dark' opacity>
                    <CardHeader text='white'>
                        <Row>
                            <Col center>
                                <input type='button' className='face_male' onClick={click_man} style={{ opacity: opacity_man }} />
                            </Col>
                            <Col center>
                                <input type='button' className='face_woman' onClick={click_woman} style={{ opacity: opacity_woman }} />
                            </Col>
                        </Row>
                        <Col center>
                            <strong>Selecione seu personagem</strong>
                        </Col>
                    </CardHeader>
                    <CardBody>
                        <form>
                            <Col>
                                <input type='text' className='form-control' placeholder='Digite seu nome' 
                                onChange={(event) => setName(event.target.value)}/>
                            </Col>
                            <p></p>
                            <Col center>
                                <Button mouse_click={submit} color='light' outline block>Confirmar</Button>
                            </Col>
                        </form>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export { NewGame }
