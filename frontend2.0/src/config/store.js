import { createStore, combineReducers } from 'redux'
import playerReducer from '../features/player/reducer'
import mapReducer from '../features/map/reducer'
import questReducer from '../components/Challenges/reducer'

const rootReducer = combineReducers(
    {
        player: playerReducer,
        map: mapReducer,
        quests: questReducer
    }
)

const store = createStore(
    rootReducer,
)

export default store