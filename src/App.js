import logo from './assets/images/logo.svg';
// import Header from './Header.js';

import './App.css';
import React, { useState } from "react";
import Dashboard from  './components/Dashboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useToken from './useToken';


// function setToken(userToken){
//   console.log("============> setToken function is called");
//   sessionStorage.setItem('token', JSON.stringify(userToken));
//   console.log("============>token is" + JSON.stringify(userToken));

// }

// function getToken(){
//   console.log("============> getToken function is called");
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }


function App() {

  // const token = getToken();
  // const [token, setToken] = useState();
  const {token, setToken} = useToken();

  console.log("========================> token is: "  + token);

  if(!token) {
    return <Login setToken={setToken} />
  }

  const logout =  e => {
    sessionStorage.clear();
    console.log("anil ============token cleared", sessionStorage.getItem('token'));
  }

  return (
    <div className="App">
      <div className="wrapper">

        <h1>All React Redux Node demo, POC, homeworks here</h1>

        <button onClick={logout}>Logout</button>
        
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
