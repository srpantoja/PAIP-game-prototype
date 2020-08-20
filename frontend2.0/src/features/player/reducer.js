import { MOVE_PLAYER, SOUTH } from '../../config/constants'

const initialState = {
    position: [80,80],
    facing: SOUTH,
    step: 0 // 0 to 7
}

const playerReducer = (state=initialState, action) => {
    switch(action.type){
        case MOVE_PLAYER:
            return {
                ...state,
                position: action.payload.position,
                facing: action.payload.facing,
                step: action.payload.step
            }
        default:
            return state
    }
}

export default playerReducer