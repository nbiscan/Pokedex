import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Details from './pages/Details/Details.js';
import Login from './pages/Login/Login.js';
import './index.css';
import App from './App';
import AuthorizedContainer from './components/AuthorizedContainer/AuthorizedContainer.js';
import {useStrict} from 'mobx';

useStrict(true);

render(
  <Router history={browserHistory}>
    <Route path="/" component={Login} />
    <Route path="/pokemon" component={AuthorizedContainer}>
      <IndexRoute component={App} />
      <Route path=":id" component={Details} />
    </Route>
  </Router>
  , document.querySelector('.js-app'));
