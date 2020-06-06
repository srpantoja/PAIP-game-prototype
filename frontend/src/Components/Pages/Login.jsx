import React, { useState, useEffect } from 'react'
import useEventListener from '@use-it/event-listener'
import Card from '../bootstrapComponents/Cards/Card'
import CardBody from '../bootstrapComponents/Cards/CardBody'
import CardHeader from '../bootstrapComponents/Cards/CardHeader'
import Col from '../bootstrapComponents/Grids/Col'
import Row from '../bootstrapComponents/Grids/Row'
import Input from '../bootstrapComponents/Forms/Input'
import FormGroup from '../bootstrapComponents/Forms/FromGroup'
import Button from '../bootstrapComponents/Forms/Button'
import Img from '../bootstrapComponents/Img'


export default function Login() {
    const [btn, setBtn] = useState(1)

    useEventListener("keydown", ({ code }) => {
        if (code.indexOf("Arrow") === -1)
            return
        const auxdirection = code.replace("Arrow", "").toUpperCase()

        if (auxdirection === 'LEFT' && btn > 1) {
            setBtn(btn - 1)
        } else if (auxdirection === 'RIGHT' && btn < 4) {
            if (btn === 4) {
                setBtn(1)
            }
            setBtn(btn + 1)
        }
    })

    const makeBtn = () => {
        console.log(btn)
        switch (btn) {
            case 1:
                return <Button color='light' outline block>Carregar Jogo</Button>
            case 2:
                return <Button color='light' outline block>Novo Jogo</Button>
            case 3:
                return <Button color='light' outline block>Créditos</Button>
            case 4:
                return <Button color='light' outline block>Contate-nos</Button>
            default:
                break;
        }
    }

    return (
        <Card text='white' bg='dark' opacity>
            <CardHeader text='white'>
                <Col center>
                    <Img name='logo'/>
                </Col>
            </CardHeader>
            <CardBody>
                <form>
                    <FormGroup>
                        {makeBtn()}
                    </FormGroup>
                </form>
            </CardBody>
        </Card>

    )
}
