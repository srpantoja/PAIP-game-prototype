import React from 'react'
import walkSprite from '../../data/tiles/Characters/hero.png'
import { connect } from 'react-redux'

import { SOUTH, NORTH, WEST, EAST, SPRITE_SIZE } from '../../config/constants'

function Player(props) {

    function getStepPixel(step) {
        const pixel = step*SPRITE_SIZE
        return `-${pixel}px`
    }

    function getFacingPixel(facing) {
        switch (facing) {
            case SOUTH:
                return `${SPRITE_SIZE*0}px`
            case NORTH:
                return `-${SPRITE_SIZE}px`
            case WEST:
                return `-${SPRITE_SIZE*2}px`
            case EAST:
                return `-${SPRITE_SIZE*3}px`
            default:
                console.log('INVALID FACING')
        }
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

function mapStateToProps(state) {
    return {
        position: state.player.position,
        facing: state.player.facing,
        step: state.player.step
    }
}


export default connect(mapStateToProps)(Player)