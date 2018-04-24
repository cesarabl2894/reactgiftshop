import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Import all the files that will be switched on the App Component
import Login from './Login.js';
import Games from './Games.js';

function Switcher(){
    return(
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/games" component={Games}/>
        </Switch>
    );
    
}