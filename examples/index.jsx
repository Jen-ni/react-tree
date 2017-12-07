/* eslint-disable no-underscore-dangle */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import ForestView from './components/forest-view/forest-view.component';

require('../images/favicon.ico');

render((
  <Router history={hashHistory}>
    <Route path="/" component={ForestView} />
  </Router>
), document.getElementById('oc-examples'));
