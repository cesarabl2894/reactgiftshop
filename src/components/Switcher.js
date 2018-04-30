import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Import all the files that will be switched on the App Component
import Games from './Games.js';
import Game from './Game.js';

function Switcher(){
    return(
        <Switch>
            <Route exact path="/games" component={Games}/>
            <Route exact path="/game/:name?" component={Game}/>
        </Switch>
    );
    
}
export default Switcher;