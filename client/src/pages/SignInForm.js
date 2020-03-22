import React, { Component } from "react";
import {Browserrouter as Router, Switch, Link, Route, NavLink, withRouter} from "react-router-dom";
import axios from 'axios';
import { MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(e) {
    e.preventDefault();

    axios
      .post('/Users/signIn', this.state)
      .then(res => {
        if (Array.isArray(res.data) && res.status===200){
          var token= res.data[0];
          var isMentor = res.data[1];
          localStorage.setItem('usertoken', token);
          this.props.history.push('/profile-page')
          if (isMentor===true){
            localStorage.setItem('isMentor', true);
          }
          return token
        }
        else{
          window.alert(JSON.stringify(res.data));
        }
      } 
        )
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    return (
      
      <MuiThemeProvider >
            <React.Fragment>
              <div style = {container}>
              <h1>Sign In</h1>
                <TextField
                  placeholder="Enter Your Email"
                  name="email"
                  label="Email"
                  margin="normal"
                  fullWidth="true"
                  onChange={this.handleChange}
                  style={{width: 620}}
                />
                <br />
                <TextField
                  placeholder="Enter Your Password"
                  name="password"
                  label="Password"
                  type="password"
                  margin="normal"
                  fullWidth="true"
                  onChange={this.handleChange}
                  style={{width: 620}}
                />
                <br />
                <Button
                  color="primary"
                  variant="contained"
                  onClick={this.handleSubmit}
                >Sign In</Button>
              
            <Link style={{marginLeft:20}}to = "/ForgotPassword">forgot password?</Link>
 
            
              
                </div>
                
            
            </React.Fragment>
          </MuiThemeProvider>
      
    );
  }
}
const container = {
  margin: '150px',
  border: '5px orange'

};
// const footer = {
// flexShrink: "0",
// textAlign: "center",
// backgroundColor: "orange",
// color: "white"
// }
export default withRouter(SignInForm);
