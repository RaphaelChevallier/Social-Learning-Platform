
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
import Logo from '../logo/logoIcon.png'; 
import { classes } from 'istanbul-lib-coverage';


class Navbar extends Component{


handleLogout= (e) => {
    e.preventDefault()
    localStorage.removeItem('usertoken')
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
          to="/"
          activeClassName="PageSwitcher__Item--Active"
          className="PageSwitcher__Item"
        >
          Sign Up
        </NavLink>

      </div>
    )

  const LogoutProfile = (
    <div>
            <Button color="inherit" onClick = {this.handleLogout.bind(this)}> {"Log Out"} </Button>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={this.toProfile}
              color="inherit"
            >
           
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
            </Menu>
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