import React from 'react';
import './index.css'
import World from "./features/world";


function App() {

    return (
        <div>
            <div className="title">DUNGEON BOY</div>
            <div className="zone-container">
            <World className="worldMap"/>
            </div>
        </div>
    )
}

export default App;
