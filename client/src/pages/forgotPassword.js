//feature built from this article: https://itnext.io/password-reset-emails-in-your-react-app-made-easy-with-nodemailer-bb27968310d7

import React, { Component } from "react";
// import { MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class forgotPassword extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      showError: false,
      serverMessage: ""
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  sendEmail = e => {
    e.preventDefault();
    if (this.state.email === "") {
      this.setState({
        showError: false,
        serverMessage: ""
      });
    } else {
      axios
      
        .post("/Users/forgot", {
          email: this.state.email
        })
        .then(response => {
          console.log(response.data);
          if (response.data === "email not in db") {
            this.setState({
              showError: true,
              serverMessage: ""
            });
          } else if (response.data === "recovery email sent") {
            this.setState({
              showError: false,
              serverMessage: "recovery email sent"
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
    const { email, serverMessage, showNullError, showError } = this.state;

    return (
      <div style={container}>
        <h1>Forgot Password</h1>
        <form className="profile-form" onSubmit={this.sendEmail}>
          <TextField
            id="email"
            label="Email"
            value={email}
            onChange={this.handleChange("email")}
            placeholder="Enter a valid email address"
            style={{width: 300}}
            margin="normal"
          />
            <Button style={{top:20}} variant="contained" color="primary" onClick = {this.sendEmail}>
                Submit
              </Button>
          {/* <input type = "submit" value = "Submit"/> */}
        </form>
        {showNullError && (
          <div>
            <p> The email address cannot be null</p>
          </div>
        )}
        {showError && (
          <div>
            <p>
              That email address isn't recognized. Please try again or create a
              new account
            </p>
            <Link to={"/SignUpFirst"}>
              <Button variant="contained" color="primary">
                Register
              </Button>
            </Link>
          </div>
        )}
        {serverMessage === "recovery email sent" && (
          <div>
            <h3>Password Reset Email Sent!</h3>
          </div>
        )}
        <Link to={"/sign-in"}>
          <Button variant="contained" color="primary">
            Return to Sign in
          </Button>
        </Link>
      </div>
    );
  }
}
const container = {
  margin: '150px',
  border: '5px orange'
};

export default forgotPassword;
