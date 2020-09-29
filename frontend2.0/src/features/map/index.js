import React from 'react'
import { SPRITE_SIZE, GRS, TRE, ROK, CHS, MAP_HEIGHT, MAP_WIDTH, QCN, QST, CLN } from '../../config/constants'
import './style.css'
import { connect } from 'react-redux'
import { setTiles } from './environment'

function MapTile(props) {

    function getTileEvent(type) { // retorna o tipo do tile
        switch (type) {
            case QST:
                return 'quest'
            case QCN:
                return 'quest_colision'
            case CLN:
                return 'colision'
            default:
                break;
        }
    }
 

    return (
        <div
            className={`tile ${getTileEvent(props.tile)}`}
            style={{
                height: SPRITE_SIZE,
                width: SPRITE_SIZE
            }}
        />
    )
}

function MapRow(props) {
    return (
        <div style={{ height: `${SPRITE_SIZE}px` }}>
            {
                props.tiles.map(
                    (tile, index) => {
                        return <MapTile tile={tile} key={index} />
                    }
                )
            }
        </div>
    )
}

function Map(props) {

    function checkChest(position) { // verifica se há chest na posição indicada
        const x = position[0] / SPRITE_SIZE // o x do personagem na tela, é o j do obstáculo na matriz
        const y = position[1] / SPRITE_SIZE // o y do personagem na tela, é o i do obstáculo na matriz
        //console.log(`[${x},${y}]`)
        if (props.tiles[y][x] === CHS) {
            let newTiles = props.tiles
            newTiles[y][x] = GRS
            setTiles(newTiles)
        }
    }

    checkChest(props.position)

    
    return (
        <div className='map'
            style={{
                position: 'relative',
                top: '0px',
                left: '0px',
                width: `${MAP_WIDTH}px`,
                height: `${MAP_HEIGHT}px`
            }}
        >
            {
                props.tiles.map(
                    (row, index) => {
                        return <MapRow tiles={row} key={index}/>
                    }
                )
            }
        </div>
    )   
}

function mapStateToProps(state) { //mapeia o estado geral para os props deste componente
    return {
        tiles: state.map.tiles,
        position: state.player.position //importante, dispara a renderização do mapa
    }
}

function mapDispatchToProps(dispatch) { //despacha a mudança do estado geral para o store
    return {
        setTiles(tiles) {
            const action = setTiles(tiles)
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Map) //conecta para o componente ter acesso às funções
