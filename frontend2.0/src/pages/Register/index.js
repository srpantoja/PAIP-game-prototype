import React from 'react'
import './style.css'
import MainGame from '../../components/MainGame'
import { Link, Redirect } from 'react-router-dom'
import { useState } from 'react'
import api from '../../services/api'

function MainPage() { //Tela de registro do usuário. Recebe as informações.
    const [curso, setCurso] = useState("CC")
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("")
    const [studentCreated, setStudentCreated] = useState(false)

    async function handleRegister() {
        if (login != "" && password != "" && gender != "") {
            const jsonData = {
                curso, login, password, gender
            }

            // no caso de erros, o servidor envia de volta um json {status: "<razao do erro>"}
            const createdStudent = await api.post("/students", jsonData).catch(err => alert(err.response.data.status))

            if (createdStudent) {
                setStudentCreated(true)
            }
        } else {
            alert("Todos os campos devem ser preenchidos.")
        }
    }

    if (studentCreated) {
        return <Redirect to="/" />
    }

    return (
        <MainGame>
            <form>
                <h3 className='title select' >Criar Conta</h3>
                <div className='button-container'>
                    <input type="text" placeholder='usuario' value={login} onChange={e => setLogin(e.target.value)}/>
                    <input type='password' placeholder='senha' value={password} onChange={e => setPassword(e.target.value)} />
                    <select id="cursos" value={curso} onChange={e => setCurso(e.target.value)}>
                        <option value="CC">Ciência da Computação</option>
                        <option value="EC">Engenharia Civil</option>
                        <option value="QI">Química Industrial</option>
                        <option value="BM" >Biomedicina</option>
                    </select>
                </div>
                <div className="image-container">
                    <label for="M">
                        <input type="radio" name="sexo" id="M" value="M" onChange={e => setGender(e.target.value)}/>
                        <img src={man_img} className='image-man' alt="Masculino" />
                    </label>
                    <label for="F">
                        <input type="radio" name="sexo" id="F" value="F" onChange={e => setGender(e.target.value)}/>
                        <img src={woman_img} className='image-woman' alt="Feminino" />
                    </label>
                </div>
                <h3 className='title select' >Selecione seu personagem inicial</h3>
                <div className='button-container register' style={{marginTop:'-25px'}}>
                    <Link onClick={e => handleRegister()}>
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
