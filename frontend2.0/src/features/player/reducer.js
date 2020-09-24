import { MOVE_PLAYER, LOGIN, SOUTH } from '../../config/constants'

const initialState = {
    id: 0,
    position: [80, 80],
    facing: SOUTH,
    step: 1 // 1 a 3 
}

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVE_PLAYER:
            return {
                ...state,
                position: action.payload.position,
                facing: action.payload.facing,
                step: action.payload.step
            }
        case LOGIN:
            return {
                ...state,
                id: action.payload.id
            }
        default:
            return state
    }
}

export default playerReducer