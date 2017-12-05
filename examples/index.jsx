/* eslint-disable no-underscore-dangle */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import ForestView from './components/forest-view/forest-view.component';

// import './app.component.scss';

require('../images/favicon.ico');

render((
  <Router history={browserHistory}>
    <Route path="/" component={ForestView} />
  </Router>
), document.getElementById('oc-examples'));
