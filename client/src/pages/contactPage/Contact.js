import React, { Component } from 'react';
import { HashRouter as Router, Link} from "react-router-dom";
import {MuiThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const container = {

  margin: "150px",
  
 

  border: "5px orange",
  
};
const formatted= ({
 
  display: 'flex',
  flexDirection: "column",
  marginTop: "2rem",
  alignItems: 'center',
  
  justifyContent: 'center',
});
const buttonStyle= ({
 
marginTop: "2rem"
});


class Contact extends Component {
    constructor() {
      super();
  
      this.state = {
        email: "",
        name: "",
        message:"",

        showError: false,
        serverMessage: ""
      };
    }
 
  

    handleChange = name => event => {
      this.setState({
        [name]: event.target.value
      });
    };
    resetForm(){
      document.getElementById('contact-form').reset();
  }
  sendMessage = e => {
   
      e.preventDefault();
      if (this.state.email == "" || this.state.name == "" || this.state.message == "") {
        window.alert("all areas need to be filled out.");
        this.setState({
          showError: false,
          serverMessage: ""
          
        });
      } else {
        window.alert("Your message has been sent!");
        axios
        
          .post("/Users/contact", {
            email: this.state.email,
            name: this.state.name,
            message: this.state.message
          })
          .then(response => {
            console.log(response.data);
            if (response.data == "email not in db") {
              this.setState({
                showError: true,
                serverMessage: ""
              });
            } else if (response.data == "recovery email sent") {
              this.setState({
                showError: false,
                serverMessage: "email sent"
              });
              
            }
          })
          .catch(error => {
            console.log(error.data);
            console.log("didn't work :(")
          });
  
          
      }
      
    };
  render() {
    const { email, name, message} = this.state;

    return (
      <div style = {container}>
        <form style = {formatted} id="contact-form">
          
        <TextField
        style = {formatted}
            id="name"
            label="name"
            value={name}
            onChange={this.handleChange("name")}
            placeholder="Enter your name"
          />
          <TextField
          style = {formatted}
            id="email"
            label="email"
            value={email}
            onChange={this.handleChange("email")}
            placeholder="Enter your email"
          />
         <TextareaAutosize
          style = {formatted}
            id="message"
            label="message"
            value={message}
            onChange={this.handleChange("message")}
            
            rowsMax={6}
            aria-label="maximum height"
            placeholder="Enter what you'd like to say"
            defaultValue="Hi I really like your idea! I'd like to support you!"
          />
          
            <Button variant="contained" style={buttonStyle} color="primary" onClick = {this.sendMessage}>
                Submit
              </Button>
          {/* <input type = "submit" value = "Submit"/> */}
        </form>
      
      </div>
    );
  }
}

export default Contact;