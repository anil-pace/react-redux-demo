import logo from './assets/images/logo.svg';
import './App.css';
import React, { useState } from "react";
import Dashboard from  './components/Dashboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences';
import Redux from './components/Redux';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import useToken from './useToken';
import CustomButton from "./components/CustomButton";
import {Button, Menu, MenuItem} from '@material-ui/core';



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

  const [anchor, setAnchor] = useState(null);

  console.log("========================> token is: "  + token);

  if(!token) {
    return <Login setToken={setToken} />
  }

  const handleLogout =  e => {
    localStorage.clear();
    console.log("anil ============token cleared", sessionStorage.getItem('token'));
    // this.props.history.push("/");
    window.location.href = "http://localhost:3000/";
  }

  const openMenu =(event) =>{
    setAnchor(event.currentTarget);
  }

  const closeMenu =(event) =>{
    setAnchor(null);
  }

  return (
    <div className="App">
      <div className="wrapper">

        <div style={{"display":"flex", "justifyContent": "space-between", "alignItems":"center"}}>
            <Button variant="contained" onClick={openMenu}>Menu</Button>
         
             <h1>All React Redux Node demo, POC, homeworks here</h1>
            <CustomButton isSecondary onClick={(e)=>handleLogout("logout")}> Logout</CustomButton>
        </div>
        <img style={{"height":"50px", "width":"50px"}} src={logo} alt="logo" />



        

        <BrowserRouter>
        <Menu 
            open={anchor}
            onClose={closeMenu}
            >
              <MenuItem onClick={closeMenu}><Link to="/">Custom ele</Link></MenuItem> 
              <MenuItem  onClick={closeMenu}><Link to="/materialui">Material ele</Link></MenuItem> 
              <MenuItem  onClick={closeMenu}><Link to="/layout">Layout</Link></MenuItem> 
              <MenuItem  onClick={closeMenu}><Link to="/redux">Redux</Link></MenuItem> 

            </Menu>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route path="/materialui">
              <Preferences />
            </Route>

            <Route path="/layout">
              <Home />
            </Route>

            <Route path="/redux">
              <Redux />
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
