import React from "react";
import Player from "../player";
import Map from "../map";
import {tiles} from '../../data/maps/1/index'
import store from "../../config/store";


function World(props) {
    store.dispatch({ type: 'ADD_TILES', payload: {
        tiles,
        }});

    return(
        <div
            style={{
                position: 'relative',
                width: '800px',
                height: '400px',
                margin: '20px auto',
            }}
        >
            <Player
                skin="m1"
            />
            <canvas id='canvas'/>
            <Map>

            </Map>
        </div>
    )

}
export default World;