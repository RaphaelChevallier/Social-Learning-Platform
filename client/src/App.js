//references
//https://www.youtube.com/watch?v=56E8b9prPTs
//https://github.com/iamfaiz/react-auth-ui
//https://scotch.io/tutorials/build-a-blog-using-expressjs-and-react-in-30-minutes
//https://serverless-stack.com/chapters/create-a-login-page.html

import React from "react";
import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import SignUpForm from "./pages/signUp/SignUpForm";
import SignInForm from "./pages/SignInForm";
import LearnerProfile from "./pages/profilePage/LearnerProfile"
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  return (
    <Router>

      <Navbar/>
      <Route path="/sign-in" component={SignInForm}></Route>
      <Route exact path="/" component={SignUpForm}></Route>
      <Route path ="/profile-page" component={LearnerProfile}></Route>
    </Router>
  );
}

   
