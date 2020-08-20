import { SET_TILES } from '../../config/constants'

const initialState = {
    tiles: []
}

const mapReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_TILES:
            return {
                ...state,
                tiles: action.payload
            }
        default:
            return state
    }
}

export default mapReducer