import useEventListener from '@use-it/event-listener';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader } from '../bootstrapComponents/Cards';
import { Button, FormGroup } from '../bootstrapComponents/Forms';
import { Col } from '../bootstrapComponents/Grids';
import './pages.css';


function HomeScreen() {
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
        switch (btn) {
            case 1:
                return <Link to='/'><Button color='light' outline block>Carregar Jogo</Button></Link>
            case 2:
                return <Link to='/NewGame'><Button color='light' outline block>Novo Jogo</Button></Link>
            case 3:
                return <Link to='/Credits'><Button color='light' outline block>Créditos</Button></Link>
            case 4:
                return <Link to='/Contact'><Button color='light' outline block>Contate-nos</Button></Link>
            default:
                break;
        }
    }

    return (
        <div>
            <div className='cf' />
            <div style={{ left: '35%', top: '45%', position: 'absolute' }} >
                <Card text='white' bg='dark' opacity>
                    <CardHeader text='white'>
                        <Col center>
                            CATCH THE CODE!
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
            </div>
        </div>

    )
}

export {HomeScreen}