//adapted from this article: https://itnext.io/password-reset-emails-in-your-react-app-made-easy-with-nodemailer-bb27968310d7

import React, { Component } from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { response } from 'express';

const title = {
    pageTitle: 'Reset Your Password',

};

class forgotPassword extends Component {
    constructor(){
        super();

        this.state = {
            email: '',
            showError: false,
            serverMessage: '',
        };
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,

        });
    };

    sendEmail = e =>{
        e.preventDefault();
        if(this.state.email == ''){
            this.setState({
                showError: false,
                serverMessage: '',
            });
}else {
    axios
    .post('http://localhost:3003/forgotPassword',{
        email: this.state.email,

    })
    .then(response => {
        console.log(response.data);
        if(response.data=='email not in db'){
            this.setState({
                showError: true,
                serverMessage: '',
                
            })
        }else if (response.data == 'recovery email sent'){
            this.setState({
                showError: false,
                serverMessage: 'recovery email sent',
            });
        }
    })
    .catch(error => {
        console.log(error.data);

    });
}





};
render(){
    const {email, serverMessage, showNullError, showError } = this.state;

    return (
        <div>
            <HeaderBar title = {title} />
            <form className = "profile-form" onSubmit={this.sendEmail}>
                <TextField
                style = {inputStyle}
                id="email"
                label="email"
                value={email}
                onChange={this.handleChange('email')}
                placeholder = "Email Address"/>
                <SubmitButtons 
                buttonStyle={forgotButton}
                buttonText={'Send Password Reset Email'}/>
            </form>
            {showNullError && (
                <div>
                    <p> The email address cannot be null</p></div>
            )}
            {showError && (
                <div>
                    <p>That email address isn't recognized. Please try again or create a new account</p>
                    <LinkButtons 
                    buttonText ={'Register'}
                    buttonStyle={registerButton}
                    link={'/SignUpFirst'}/>
                    </div>
            )}
                {serverMessage == 'recovery email sent' && (<div>
        <h3>Password Reset Email Sent!</h3>
    </div>)}
    <LinkButtons 
     buttonText ={'Go Home'}
     buttonStyle={homeButton}
     link={'/'}/>

        </div>
    );

}
    }

    const buttonStyle = {

  
 
        padding: "0 32 px",
        margin: "0 64px",
        border: "5px orange"
      };
      const homeButton = {
 
        padding: "0 32 px",
        margin: "0 64px",
        border: "5px orange"
      };
      const registerButton = {

  
 
        padding: "0 32 px",
        margin: "0 64px",
        border: "5px orange"
      };
      const forgotButton = {

  
 
        padding: "0 32 px",
        margin: "0 64px",
        border: "5px orange"
      };
export default forgotPassword;