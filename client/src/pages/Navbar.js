
import React, { Component } from 'react'
import { HashRouter as Router, NavLink, withRouter} from "react-router-dom";
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

  componentDidMount(){
    const token = localStorage.usertoken
    if(token!=null){  
    const decoded = jwt_decode(token)
    this.setState({
      firstName: decoded.firstname,
      lastName: decoded.lastname, 
      isMentor: decoded.mentor_id,}
    )
  }  

  };
handleLogout= (e) => {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    localStorage.removeItem('isMentor')
    this.props.history.push('/sign-in')
  };

toProfile = (e) => {
    this.props.history.push('/profile-page')
}
toContentCreation= (e) => {
  this.props.history.push('/post')
}
toSearch= (e) => {
  this.props.history.push('/search-users')
}
toNewsfeed= (e) => {
  this.props.history.push('/newsfeed')
}


render(){    
    
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
            
        <IconButton aria-label="account of current user" aria-controls="simple-menu" aria-haspopup="true" onClick={this.toProfile}
          color="inherit"  
        >
          
          <Typography variant="h6" component="h6"style={{ position: 'relative' }}>{this.state.firstName} {this.state.lastName}</Typography>
            <AccountCircle/>
        </IconButton>

      
      <Button color="inherit" onClick = {this.handleLogout.bind(this)}> Logout </Button>
            
    </div>
  )
    return(
        <div className ={classes.root}>   
            <AppBar position="fixed">
                <Toolbar>
                <img src={Logo} alt="websitelogo"/>
                <Typography variant="h4" className={classes.title} style={{  width: '80%', position: 'relative' }}>
                    GIDDY-UP
                    <Button color="inherit" onClick = "null">Home </Button>
                    <Button color="inherit" onClick = "null"> Contact Us </Button> 
                    {localStorage.usertoken!=null ? <Button color="inherit" onClick={this.toNewsfeed}>Newsfeed</Button>:""}
                    <Button color="inherit" onClick={this.toSearch}>Search Users</Button>
                    {
                      (this.state.isMentor!=null)&& (localStorage.usertoken!=null)?
                      <Button color="inherit" onClick={this.toContentCreation.bind(this)}>Content Creation</Button>:""
                    }
                </Typography>
                {localStorage.usertoken ? LogoutProfile : LoginRegSwitch }
                </Toolbar>
            </AppBar>
        </div>
    )
    }
}
// style={{  width: '50%', position: 'relative' }}
export default withRouter(Navbar);