import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Lots from './components/Lots';
import LotDescr from './components/lots/LotDescr';
import Login from './components/Login';
import Restore from './components/Restore';
import Register from './components/Register';
import Profile from './components/Profile';

window.React = React;

render(
  (<Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/" component={Home} />
      <Route path="/lots" component={Lots} />
        <Route path="/lots/:id" component={LotDescr} />
      <Route path="/login" component={Login} />
      <Route path="/restore" component={Restore} />
      <Route path="/register" component={Register} />
      <Route path="/profile" component={Profile} onEnter={Profile.onEnter} />
    </Route>
  </Router>), document.getElementById('content')
);  
