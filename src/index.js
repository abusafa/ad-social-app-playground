import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, browserHistory } from 'react-router'
import GraphiQlApp from './GraphiQlApp';
import App from './App';


import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
    <Route path="/graphi" component={GraphiQlApp}>
    </Route>
  </Router>

  ,
  document.getElementById('root')
);
