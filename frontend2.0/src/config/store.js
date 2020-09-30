import { createStore, combineReducers } from 'redux'
import playerReducer from '../features/player/reducer'
import mapReducer from '../features/map/reducer'
import questReducer from '../components/Challenges/reducer'

const rootReducer = combineReducers( //combina os redutores que modificam o estado geral
    {
        player: playerReducer,
        map: mapReducer,
        quest: questReducer
    }
)

const store = createStore( //cria o estado geral
    rootReducer,
)

export default store