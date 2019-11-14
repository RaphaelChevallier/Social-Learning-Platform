//references
//https://www.youtube.com/watch?v=56E8b9prPTs
//https://github.com/iamfaiz/react-auth-ui
//https://scotch.io/tutorials/build-a-blog-using-expressjs-and-react-in-30-minutes
//https://serverless-stack.com/chapters/create-a-login-page.html

import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";
import "./App.css";
import Dialog from '@material-ui/core/Dialog';
import SignUpForm from "./pages/signUp/SignUpForm";
import SignInForm from "./pages/SignInForm";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {MuiThemeProvider} from '@material-ui/core/styles';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bgColor: "rgb(255, 255, 255)",
    
    };

  }

 

  render() {
    return (
      <Router>
       
     
            <div className="PageSwitcher">
              <NavLink
                to="/sign-in"
                id="first"
                onClick={this.clickChange}
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign In
              </NavLink>

              <NavLink
                exact
                to="/"
              
               
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/" component={SignUpForm}></Route>
            <Route path="/sign-in" component={SignInForm}></Route>
        
      </Router>
    );
  }
}

export default App;

