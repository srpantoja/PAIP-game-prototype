import React from 'react'
//import walkSprite from '../../data/tiles/Characters/hero.png'
import walkSprite from '../../data/tiles/Characters/su1 Student male 05.png'
import { connect } from 'react-redux'

import { SOUTH, NORTH, WEST, EAST, SPRITE_SIZE } from '../../config/constants'

function Player(props) {

    function getStepPixel(step) {
        const pixel = step*SPRITE_SIZE
        return `-${pixel}px`
    }

    function getFacingPixel(facing) { // direciona para onde o personagem olha
        //32x32
        switch (facing) {
            case SOUTH: // direciona para Baixo
                return `${SPRITE_SIZE*0}px`
            case NORTH: // direciona para Cima
                return `-${SPRITE_SIZE*3}px`
            case WEST: // direciona para Esquerda
                return `-${SPRITE_SIZE}px`
            case EAST: // direciona para Direita
                return `-${SPRITE_SIZE*2}px`
            default:
                console.log('INVALID FACING')
        }

        //40x40
        /*switch (facing) {
            case SOUTH: // direciona para Baixo
                return `${SPRITE_SIZE*0}px`
            case NORTH: // direciona para Cima
                return `-${SPRITE_SIZE}px`
            case WEST: // direciona para Esquerda
                return `-${SPRITE_SIZE*2}px`
            case EAST: // direciona para Direita
                return `-${SPRITE_SIZE*3}px`
            default:
                console.log('INVALID FACING')
        }*/
    }

    //console.log('render player')
    return (
        <div
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${walkSprite}')`,
                backgroundPosition: `${getStepPixel(props.step)} ${getFacingPixel(props.facing)}`,
                backgroundRepeat: 'no-repeat',
                width: `${SPRITE_SIZE}px`,
                height: `${SPRITE_SIZE}px`
            }}
        >
        </div>
    )

}

function mapStateToProps(state) { // retorna o estado do mapa em relação ao personagem
    return {
        position: state.player.position,
        facing: state.player.facing,
        step: state.player.step
    }
}


export default connect(mapStateToProps)(Player)
