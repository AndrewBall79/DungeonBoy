import React from "react";
import walkSprite from './player_walk.png'
import {connect} from 'react-redux'
import handleMovement from "./movement";

function Player(props) {
    return(
        <div
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${walkSprite}')`,
                backgroundPosition: '0 0',
                width: '36px',
                height: '30px',
                margin: '4px 0px 0px 4px'
            }}
        />
    )
}

function mapStateToProps(state) {
    return{
        ...state.player,
    }
}

export default connect(mapStateToProps)(handleMovement(Player));

