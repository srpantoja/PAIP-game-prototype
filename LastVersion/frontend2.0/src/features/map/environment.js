import { SET_TILES} from '../../config/constants'

export function setTiles(tiles){ //cria action
    return {
        type: SET_TILES,
        payload: tiles
    }
}