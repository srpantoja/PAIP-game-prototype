import React from 'react'
import './style.css'
import MainGame from '../../components/MainGame'
import { Link } from 'react-router-dom'

function MainPage() { //Tela de registro do usuário. Recebe as informações.
    return (
        <MainGame>
            <form>
                <h3 className='title select' >Criar Conta</h3>
                <div className='button-container'>
                    <input type="text" placeholder='usuario' />
                    <input type='password' placeholder='senha' />
                    <select id="cursos">
                        <option value="CC">Ciência da Computação</option>
                        <option value="EC">Engenharia Civil</option>
                        <option value="QI">Química Industrial</option>
                        <option value="BM" >Biomedicina</option>
                        <option value="null" selected>Selecione o curso</option>
                    </select>
                </div>
                <dive className="image-container">
                    <label for="M">
                        <input type="radio" name="sexo" id="M" value="M" />
                        <img src={man_img} className='image-man' alt="Masculino" />
                    </label>
                    <label for="F">
                        <input type="radio" name="sexo" id="F" value="F" />
                        <img src={woman_img} className='image-woman' alt="Feminino" />
                    </label>
                </dive>
                <h3 className='title select' >Selecione seu personagem inicial</h3>
                <div className='button-container register' style={{marginTop:'-25px'}}>
                    <Link to='/register'>
                        Registrar
                    </Link>
                </div>
            </form>
        </MainGame >
    )
}

const man_img = 'https://pm1.narvii.com/7031/0aaa1568fa359afcbda0bb514a0a27b2514c0dabr1-1080-1080v2_uhq.jpg'
const woman_img = 'https://www.matsuricon.org/sites/default/files/characters/Ochaco_school_headshot.png'

export default MainPage
