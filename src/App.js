import logo from './assets/images/logo.svg';
// import Header from './Header.js';

import './App.css';
import React, { useState } from "react";
import Dashboard from  './components/Dashboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <div className="wrapper">
            <h1>All React Redux Node demo work application</h1>
            <BrowserRouter>
              <Switch>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/preferences">
                  <Preferences />
                </Route>
              </Switch>
            </BrowserRouter>
          </div>
            
          </div>
  );
}

export default App;
