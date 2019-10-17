//references
//https://www.youtube.com/watch?v=56E8b9prPTs
//https://github.com/iamfaiz/react-auth-ui
//https://scotch.io/tutorials/build-a-blog-using-expressjs-and-react-in-30-minutes
//https://serverless-stack.com/chapters/create-a-login-page.html

import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";
import "./App.css";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";

class App extends Component {
  render() {
    return (
      <Router>
        
        <div className="App">
       
        <div className="App_Aside"> </div>
          <div className="App_Form">
          <div className="FormTitle">
              <NavLink
                to="/sign-in"
                activeClassName="FormTitle_Link--Active"
                className="FormTitle_Link"
              >
                Sign In
              </NavLink>
             
              <NavLink
                exact
                to="/"
                activeClassName="FormTitle_Link--Active"
                className="FormTitle_Link"
              >
                Sign Up
              </NavLink>
            </div>
            {/* <div className="PageSwitcher">
            <NavLink to="/sign-in" activeClassName="PageSwitcher_Item--Active" className="PageSwitcher_Item">
              Sign In
            </NavLink>
            <NavLink exact to="/" activeClassName="PageSwitcher_Item--Active" className="PageSwitcher_Item">
              Sign Up
            </NavLink>
          </div> */}
         

            <Route exact path="/" component={SignUpForm}></Route>
            <Route path="/sign-in" component={SignInForm}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
