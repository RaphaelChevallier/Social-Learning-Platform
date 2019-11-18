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
import LearnerProfile from "./pages/profilePage/LearnerProfile"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Logo from './logo/logoIcon.png'; 




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
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [text, setText] = React.useState("Log OUT");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //const handleLogin=()=>{
    //if(sessionStorage.getItem('isloggedIn')===true && auth===false){

      //setText(auth? "login" :"logout");
    //}
  //}
  const handleLogout = () => {
      if(sessionStorage.getItem('isLoggedIn')===true && auth===true){
          setText(auth ? "login": "logout");
          sessionStorage.setItem('isLoggedIn',false);
      }
        else{
          setAuth(false);
          setText(auth ? "login": "login"); 
        }
    }
  

  return (
    <Router>
    <div className={classes.root}>
      
      <AppBar position="static">
        <Toolbar>
          <img src={Logo} alt="websitelogo"/>
          <Typography variant="h4" className={classes.title}>
            GIDDY-UP
            <Button color="inherit" onClick = "null">Home </Button>
            <Button color="inherit" onClick = "null"> Explore </Button>
            <Button color="inherit" onClick = "null"> Contact Us </Button>
          </Typography>
          
          <Button color="inherit" onClick = {handleLogout}> {text} </Button>
          
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
             
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
    <div className="PageSwitcher">
          <NavLink
            to="/sign-in"
            id="first"
           
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
        <Route path ="/profile-page" component={LearnerProfile}></Route>
    </Router>
  );
}

   
