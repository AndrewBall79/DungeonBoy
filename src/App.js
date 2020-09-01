import React from 'react';
import './index.css'
import Player from "./components/player";


function App() {

    return (
        <div>
            <div className="title">DUNGEON BOY</div>
            <Player skin="m1"/>
            {/*<World className="worldMap"/>*/}
        </div>
    )
}

export default App;
