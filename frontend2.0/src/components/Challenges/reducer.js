import { QUEST } from '../../config/constants'
const initialState = {
    quests: {}
}

const challengeReducer = (state = initialState, action) => {
    switch (action.type) {
        case QUEST:
            return {
                ...state,
                quest: action.payload.quest
            }
    }
}

export default challengeReducer