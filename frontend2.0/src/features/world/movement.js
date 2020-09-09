import { WEST, EAST, NORTH, SOUTH, SPRITE_SIZE, MOVE_PLAYER, MAP_HEIGHT, MAP_WIDTH, ROK, TRE, TOTAL_STEPS, CLN, QCN } from '../../config/constants'
import store from '../../config/store'

//action
export function moveToPosition(direction) {

    function getNewPosition(direction) {
        const oldPos = store.getState().player.position
        switch (direction) {
            case WEST:
                return [oldPos[0] - SPRITE_SIZE, oldPos[1]]
            case EAST:
                return [oldPos[0] + SPRITE_SIZE, oldPos[1]]
            case NORTH:
                return [oldPos[0], oldPos[1] - SPRITE_SIZE]
            case SOUTH:
                return [oldPos[0], oldPos[1] + SPRITE_SIZE]
            default:
                return oldPos
        }
    }

    function isPositionInsideBoundaries(position) {
        if (
            (position[0] >= 0 && position[0] <= MAP_WIDTH - SPRITE_SIZE)
            &&
            (position[1] >= 0 && position[1] <= MAP_HEIGHT - SPRITE_SIZE)
        )
            return true
        return false
    }

    function detectEventCollid(position){
        const tiles = store.getState().map.tiles
        const x = position[0] / SPRITE_SIZE // o x do personagem na tela, é o j do obstáculo na matriz
        const y = position[1] / SPRITE_SIZE // o y do personagem na tela, é o i do obstáculo na matriz
        
        if(tiles[y][x] === CLN || tiles[y][x] === QCN){
            return true
        }
        return false
    }

    function isObstacleColliding(position) {
        const tiles = store.getState().map.tiles
        const x = position[0] / SPRITE_SIZE // o x do personagem na tela, é o j do obstáculo na matriz
        const y = position[1] / SPRITE_SIZE // o y do personagem na tela, é o i do obstáculo na matriz
        //console.log(`[${x},${y}]`)
        if (tiles[y][x] === ROK || tiles[y][x] === TRE)
            return true
        return false
    }
    
    function attemptMove(direction) {
        const oldPos = store.getState().player.position
        const newPos = getNewPosition(direction)
        return (
            isPositionInsideBoundaries(newPos)
                &&
                !detectEventCollid(newPos)
                ? newPos : oldPos
        )
    }

    function advanceStep() {
        const step = store.getState().player.step
        return (step + 1 === TOTAL_STEPS) ? 0 : step + 1
    }

    return {
        type: MOVE_PLAYER,
        payload: {
            position: attemptMove(direction),
            facing: direction,
            step: advanceStep()
        }
    }
}