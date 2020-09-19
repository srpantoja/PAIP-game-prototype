import React from 'react'
import './style.css'

function Challenges(props) {
    return (
        <>
            <div className='text-container'>
                <div className='textbox'>
                    <img className='img' src={img} />
                    <span className='text'>
                        Testando testando testando
                        Testando testando testando
                        Testando testando testando
                        Testando testando testando
                        Testando testando testando
                        Testando testando testando
                        Testando testando testando
                        Testando testando testando
                        Testando testando testando
                        Testando testando testando
                        Testando testando testando
                        Testando testando testando
                        Testando testando testando
                        Testando testando testando
                        Testando testando testando
                        Testando testando testando
                </span>
                </div>
            </div>
            <div className='code-container'>
                <p className='text-questao'>Atividade 1</p>
                <textarea type='textarea' placeholder='Codifique aqui'  rows='5' cols='5'  className='textarea-questao'/>
                <input type='button'  value='enviar' className='btn-questao'/>
            </div>
        </>

    )
}

const img = 'https://i.pinimg.com/736x/09/4c/64/094c64b1720cde9b40183ac4d038374f.jpg'

export default Challenges