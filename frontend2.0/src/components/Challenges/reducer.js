import { QUEST } from '../../config/constants'
const initialState = {
    id: "cachorro 123",
    name: null,
    area: null,
    description: null,
    inputFile: null,
    outputFile: null,
    __v: null,
    posX: null,
    posY: null

}

const challengeReducer = (state = initialState, action) => {
    switch (action.type) {
        case QUEST:
            return {
                ...state,
                id: action.payload.challange._id,
                name: action.payload.challange.name,
                area: action.payload.challange.area,
                description: action.payload.challange.description,
                inputFile: action.payload.challange.inputFile,
                outputFile: action.payload.challange.outputFile,
                __v: action.payload.challange.__v,
                posX: action.payload.challange.posX,
                posY: action.payload.challange.posY
            }
        case 'default':
            return state
        default: return state
    }
}

export default challengeReducer