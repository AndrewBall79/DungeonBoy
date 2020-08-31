import React from "react";
import walkSprite from './player_walk.png'
import {connect} from 'react-redux'
import handleMovement from "./movement";
import './styles.css'

function Player(props) {
    return(
        <div
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${walkSprite}')`,
                backgroundPosition: props.spriteLocation,
                width: '32px',
                height: '32px',
                margin: '8px 0px 0px 8px'
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

