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
 
  constructor() {

    super();
   this.state ={bgColor: 'rgb(233, 189, 109)', bgColor2: 'rgb(134, 174, 211)'}
    
    this.clickChange = this.clickChange.bind(this);
    
  }

 
  clickChange(e){

    if(e.target.id == "first"){
      this.setState({bgColor:'rgb(134, 174, 211)' })
      this.setState({bgColor2: 'rgb(233, 189, 109)' })
    }
      if(e.target.id == "second"){
        this.setState({bgColor:'rgb(233, 189, 109)' })
        this.setState({bgColor2: 'rgb(134, 174, 211)' })
    }
  
 
}
  
  render() {
    return (
      <Router>
        
        <div className="App">
       
        <div style = {{
          width: '100%',
          height: '10%',
          backgroundColor: this.state.bgColor}}
          />
          <div style = {{
            backgroundColor: this.state.bgColor2,
            width: '100%',
             height: '90%',
             paddingBottom: '25px', 
             paddingRight:'40px',
             paddingLeft:'40px',

            overflow: 'auto',
           paddingTop: '100px'
          }}
        >
          <div className="FormTitle">
              <NavLink
                to="/sign-in"
                id = "first"
                onClick={this.clickChange}
                activeClassName="FormTitle_Link--Active"
                className="FormTitle_Link"
              >
                Sign In
              </NavLink>
             
              <NavLink
                exact
                to="/"
                id = "second"
                onClick={this.clickChange}
                activeClassName="FormTitle_Link--Active"
                className="FormTitle_Link"
              >
                Sign Up
              </NavLink>
            </div>
            
         

            <Route exact path="/" component={SignUpForm}></Route>
            <Route path="/sign-in" component={SignInForm}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
