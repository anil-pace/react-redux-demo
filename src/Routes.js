import React from "react";

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import Dashboard from  './components/Dashboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
     <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route path="/preferences">
              <Preferences />
            </Route>

            <Route exact path="/">
              <Redirect to="/dashboard" />   
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
  </Router>
);
export default Routes;