
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

      <Button color="inherit" onClick={this.toSearch}>Search Users</Button>
      {
        (this.state.isMentor!=null)&& (localStorage.usertoken!=null)?
          <Button color="inherit" onClick={this.toContentCreation.bind(this)}>Content Creation</Button>:""
      }
            
      <PopupState variant="popover" popupId="demo-popup-menu">
        {popupState => (
          <React.Fragment>
            
            <IconButton aria-label="account of current user" aria-controls="simple-menu" aria-haspopup="true" {...bindTrigger(popupState)}
              color="inherit"  
            >
              
              <Typography variant="h6" component="h6"style={{ position: 'relative' }}>{this.state.firstName} {this.state.lastName}</Typography>
                <AccountCircle/>
            </IconButton>

            {/* I left this <Menu> tag below just to fill space...using the dropdown, because I think we could use it in the future. */}
            {/* But it is currently useless. */}
            <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={this.toProfile}>Profile</MenuItem>
                {(this.state.isMentor!=null)&& (localStorage.usertoken!=null)?
                <MenuItem onClick={this.toContentCreation.bind(this)}>Content Creation</MenuItem>:""}
                <MenuItem onClick={this.handleLogout.bind(this)}>Logout</MenuItem>
            </Menu>

          </React.Fragment>
        )}
      </PopupState>
      
      <Button color="inherit" onClick = {this.handleLogout.bind(this)}> Logout </Button>
            
    </div>
  )
    return(
        <div className ={classes.root}>   
            <AppBar position="static">
                <Toolbar>
                  <img src={Logo} alt="websitelogo"/> 
                  <Typography className={classes.title} style={{  width: '40%', position: 'relative' }}> 
                    <Button color="inherit" onClick={this.toProfile}> <h3>GIDDY-UP</h3> </Button>
                  </Typography>
                  {localStorage.usertoken!=null ? <Button color="inherit" onClick="null">Newsfeed</Button>:""}
                  <Button color="inherit" onClick = "null"> Contact Us </Button>
                  {localStorage.usertoken ? LogoutProfile : LoginRegSwitch }

                  {/* <Typography> 
                    {localStorage.usertoken ? LogoutProfile : LoginRegSwitch }
                  </Typography> */}
                </Toolbar>
            </AppBar>
        </div>
    )
    }
}
// style={{  width: '50%', position: 'relative' }}
export default withRouter(Navbar);