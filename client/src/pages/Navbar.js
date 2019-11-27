
import React, { Component } from 'react'
import { HashRouter as Router, NavLink, withRouter} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import Logo from '../images/logoIcon.png'; 
import { classes } from 'istanbul-lib-coverage';
import jwt_decode from 'jwt-decode';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';




class Navbar extends Component{
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      isMentor:'',
    }
    }
    


handleLogout= (e) => {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    localStorage.removeItem('isMentor')
    this.props.history.push('/sign-in')
  };

toProfile = (e) => {
    this.props.history.push('/profile-page')
}

render(){
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

    
const LoginRegSwitch = (
  <div className="PageSwitcher" >
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
          to="/register"
          activeClassName="PageSwitcher__Item--Active"
          className="PageSwitcher__Item"
        >
          Sign Up
        </NavLink>

      </div>
    )
 
    
  

  const LogoutProfile = (
    <div>         
      <PopupState variant="popover" popupId="popup-menu">
      {popupState => (
        <React.Fragment>
            <IconButton
              {...bindTrigger(popupState)}
              color="inherit"  
            >
        <Typography variant="h6" component="h6"style={{ position: 'relative' }}>{this.state.firstName} {this.state.lastName}</Typography>
              <AccountCircle/>
            </IconButton>
            <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={this.toProfile}>Profile</MenuItem>
                {(this.state.isMentor!=null)&& (localStorage.usertoken!=null)?
                <MenuItem onClick={this.toContentCreation.bind(this)}>Content Creation</MenuItem>:""}
            {(localStorage.usertoken!=null)?<MenuItem onClick={this.handleLogout.bind(this)}>Logout</MenuItem>:""}
            </Menu>
            </React.Fragment>
      )}
    </PopupState>
 
            
          </div>
    )
    return(
        <div className ={classes.root}>   
            <AppBar position="static">
                <Toolbar>
                <img src={Logo} alt="websitelogo"/>
                <Typography variant="h4" className={classes.title} style={{  width: '80%', position: 'relative' }}>
                    GIDDY-UP
                    <Button color="inherit" onClick = "null">Home </Button>
                    <Button color="inherit" onClick = "null"> Explore </Button>
                    <Button color="inherit" onClick = "null"> Contact Us </Button>
                    
                </Typography>
                {localStorage.usertoken ? LogoutProfile : LoginRegSwitch }
                
                </Toolbar>
            </AppBar>
        </div>
    )
    }
}

export default withRouter(Navbar);