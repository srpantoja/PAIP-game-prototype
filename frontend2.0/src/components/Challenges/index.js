import React from 'react'
import './style.css'
import { connect } from 'react-redux'

function Challenges(props) {

    const quest =  [360,80]
    

    const teste = () =>{
        console.log(props.position)
        if(props.position[0] === 80 && props.position[1] === 80)
            return <h1>Aperte Enter</h1>
    }
    return (
        <div className='text-container'>
            <div className='textbox'>
                <img className='img' src={img} />
                <span className='text'>
                    {teste()}
                </span>
            </div>
        </div>


    )
}

function mapStateToProps(state) {
    return {
        tiles: state.map.tiles,
        position: state.player.position //importante, dispara a renderização do mapa
    }
}

const img = 'https://i.pinimg.com/736x/09/4c/64/094c64b1720cde9b40183ac4d038374f.jpg'

export default connect(mapStateToProps)(Challenges)
