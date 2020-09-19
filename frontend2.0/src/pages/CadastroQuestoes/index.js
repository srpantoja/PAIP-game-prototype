import React from 'react'
import './style.css'
import MainGame from '../../components/MainGame'
import { Link } from 'react-router-dom'

function MainPage() {
    return (
        <MainGame>
            <form>
                <h3 className='title select' >Cadastrar Questão</h3>
                <div className='grid-container'>
                    <input type="text" placeholder='Nome' className='name' />
                    <select id="cursos" className='knowledgearea'>
                        <option value="CC">Ciência da Computação</option>
                        <option value="EC">Engenharia Civil</option>
                        <option value="QI">Química Industrial</option>
                        <option value="BM" >Biomedicina</option>
                        <option value="null" selected>Selecione o curso</option>
                    </select>
                    <textarea className='textarea-cad' type='textarea' placeholder='Descrição'  rows='5' cols='5' className='description' />
                    <textarea className='textarea-cad' type='textarea' placeholder='Entrada' rows='5' cols='5' className='input' />
                    <textarea className='textarea-cad' type='textarea' placeholder='Saída' rows='5' cols='5' className='output' />
                    <input type='submit' value='Cadastrar' className='cadquest'/>
                </div>
            </form>
        </MainGame >
    )
}

export default MainPage