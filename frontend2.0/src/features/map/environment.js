import { SET_TILES} from '../../config/constants'

export function setTiles(tiles){
    return {
        type: SET_TILES,
        payload: tiles
    }
}