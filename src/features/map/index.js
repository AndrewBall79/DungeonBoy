import React from "react";
import {SPRITE_SIZE} from "../../config/constants";
import {connect} from 'react-redux'
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import './styles.css'

function getTileSprite(type) {
    switch(type) {
        case 0:
            return 'grass';
        case 2:
            return 'chest';
        case 3:
            return 'passable-tree';
        case 4:
            return 'lava';
        case 5:
            return 'rock';
        case 6:
            return 'tree';
        case 7:
            return 'skull';
        case 8:
            return 'stoneWall'
    }
}

function MapTile(props) {
    return <div
        className={`tile ${getTileSprite(props.tile)}`}
        style={{
            height: SPRITE_SIZE,
            width: SPRITE_SIZE
        }}

    >
    </div>
}

function MapRow(props) {
    return <div className="row">
        {
        props.tiles.map( tile => <MapTile tile={tile} />)
        }
    </div>
}

function Map(props) {
    return (
        <div
        style={{
            width: '800px',
            height: '480px',
            border: '4px solid grey',
            borderRadius: '3px',
        }}
        >
            {
              props.tiles.map(row => <MapRow tiles={row}/>)
            }
        </div>
    )
}

function mapStateToProp(state) {
    return{
        tiles: state.map.tiles
    }
}

export default connect(mapStateToProp)(Map)