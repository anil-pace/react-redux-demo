import logo from './assets/images/logo.svg';

import './App.css';
import React, { useState } from "react";
import Dashboard from  './components/Dashboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';
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


function App(props) {

  // const token = getToken();
  // const [token, setToken] = useState();
  const {token, setToken} = useToken();

  console.log("========================> token is: "  + token);

  if(!token) {
    return <Login setToken={setToken} />
  }

  const logout =  e => {
    localStorage.clear();
    console.log("anil ============token cleared", sessionStorage.getItem('token'));
    // this.props.history.push("/");
    window.location.href = "http://localhost:3000/";
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

            <Route exact path="/">
              <Redirect to="/dashboard" />   
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
