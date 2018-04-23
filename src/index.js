import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import List from './components/List.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/name" component={List}/>
      </div>
  </Router>
	, document.getElementById('root'));
registerServiceWorker();
