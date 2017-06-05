import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Router, Route, hashHistory} from 'react-router';

ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={App} />
  <Route path="/about" component={About} />
</Router>

, document.getElementById('root'));
registerServiceWorker();
