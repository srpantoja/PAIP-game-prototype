import { QUEST } from '../../config/constants'
const initialState = {
    quests: {
        id: "teste",
        name: "teste",
        area: "teste",
        description: "teste",
        inputFile: "teste",
        outputFile: "teste",
        __v: 0,
        posX: 0,
        posY: 0
    }

}

const challengeReducer = (state = initialState, action) => {
    switch (action.type) {
        case QUEST:
            return {
                ...state,
                quest: action.payload.quest
            }
        default:
            return state
    }
}

export default challengeReducer