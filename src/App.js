import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
// import urlservices from './services/urlservices';
import Login from './components/Login.js';
import Main from './components/Main.js';
import './assets/css/style.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      email : '',
      password : ''
    }
  }
  render(){
    return(
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/' component={Main} />
        </Switch>
    )
  }
  
}

export default App;
