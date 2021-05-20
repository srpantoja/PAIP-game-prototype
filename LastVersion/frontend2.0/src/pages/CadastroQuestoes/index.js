import React from 'react'
import './style.css'
import MainGame from '../../components/MainGame'
import { Link, Redirect } from 'react-router-dom'
import { useState } from 'react'
import api from '../../services/api'

function MainPage() {
    const [name, setName] = useState("")
    const [area, setArea] = useState("CC")
    const [description, setDescription] = useState("")
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")
    const [success, setSuccess] = useState(false)
    const [posX, setPosX] = useState(0)
    const [posY, setPosY] = useState(0)

    async function handleQuestionRegister(e) {
        e.preventDefault()

        if (name != "" && description != "" && input != "" && output != "") {
            const jsonData = {
                name, area, description, input, output, posX, posY
            }

            const createdQuestion = await api.post("/challenges", jsonData)
            
            if (createdQuestion.data) {
                setSuccess(true)
            }
        } else {
            alert("Todos os campos devem ser preenchidos!")
        }
    }

    if (success) {
        return <Redirect to="/" />
    }

    return (
        <MainGame>
            <form>
                <h3 className='title select' >Cadastrar Questão</h3>
                <div className='grid-container'>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Nome' className='name' />
                    <select value={area} onChange={e => setArea(e.target.value)}  id="cursos" className='knowledgearea'>
                        <option value="CC">Ciência da Computação</option>
                        <option value="EC">Engenharia Civil</option>
                        <option value="QI">Química Industrial</option>
                        <option value="BM" >Biomedicina</option>
                        <option value="null">Selecione o curso</option>
                    </select>
                    <textarea value={description} onChange={e => setDescription(e.target.value)} className='textarea-cad' type='textarea' placeholder='Descrição'  rows='5' cols='5'/>
                    <textarea value={input} onChange={e => setInput(e.target.value)} className='textarea-cad' type='textarea' placeholder='Entrada' rows='5' cols='5' />
                    <textarea value={output} onChange={e => setOutput(e.target.value)} className='textarea-cad' type='textarea' placeholder='Saída' rows='5' cols='5'/>
                    <input type="number" value={posX} onChange={e => setPosX(e.target.value)}></input>
                    <input type="number" value={posY} onChange={e => setPosY(e.target.value)}></input>

                    <input onClick={handleQuestionRegister} type='submit' value='Cadastrar' className='cadquest'/>
                </div>
            </form>
        </MainGame >
    )
}

export default MainPage