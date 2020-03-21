import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";
import { Link, withRouter } from "react-router-dom";
const loading = {
  margin: "1em",
  fontSize: "24px"
};

 class ResetPassword extends  Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      update: false,
      isLoading: true,
      error: false
    };
  }

  async componentDidMount() {
    console.log("checking params");
   
    console.log(this.props.match.params.token);//this code is to check the token part of the url
    await axios
      .get("/Users/reset", {
         params: {
          resetPasswordToken: this.props.match.params.token
         }
      })
      .then((response) => {
      
        
       
        if (response.data.message === "OKAY") {
          console.log("reset is a go");
          console.log("userid is " + response.data.username)
          this.setState({
            username: response.data.username,
            update: false,
            isLoading: false,
            error: false
          });
        
        } else {
          this.setState({
            update: false,
            isLoading: false,
            error: true
          });
        }
      })
      .catch(error => {
        console.log(error.data);
      });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  updatePassword = e => {
    e.preventDefault();
    console.log("sending username" + this.state.username)
      axios
        .put("/Users/updatePasswordViaEmail", {
          username: this.state.username,
          password: this.state.password,
        })
        .then(response => {
          console.log(response.data);
          if (response.data.message === "password updated") {
            this.setState({
              updated: true,
              error: false,
            });
          } else {
            this.setState({
              updated: false,
              error: true,
            });
          }
        })
        .catch(error => {
          console.log(error.data);
        });
    
  };
  render() {
    const { password, error, isLoading, updated } = this.state;
    if (error) {
      console.log("there was an error:" + error);
      return (
        <div>
       
          <div style={loading}>
            <h4>problem resetting. please try again</h4>
            <Link to={"/"}>
              <Button variant="contained" color="primary">
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      );
    } else if (isLoading) {
      return (
        <div>
        
          <div style={loading}>Loading User Data...</div>
        </div>
      );
    } else {
      return (
        <div style={container}>
          <h1>Reset Password</h1>
          <form className="password-form" onSubmit={this.updatePassword}>
            <TextField
              id="password"
              label="password"
              value={password}
              onChange={this.handleChange("password")}
              placeholder="New Password"
              type="password"
              style={{width: 300}}
            />
            {/* <input type = "submit" Value = "Submit" style = {submitStyle} /> */}
            <Button style={{top:20}} variant="contained" color="primary" onClick = {this.updatePassword}>
                Update
              </Button>
          </form>
          {updated && (
            <div>
              <p>
                {" "}
                Your password has been successfully reset! Go ahead and try logging in again.
              </p>
              <Link to={"/sign-in"}>
                <Button variant="contained" color="primary">
                 Return to Sign in
                </Button>
              </Link>
            </div>
          )}

        </div>
      );
    }
  }
}
const container = {
  margin: '150px',
  border: '5px orange'
};

export default withRouter(ResetPassword);


