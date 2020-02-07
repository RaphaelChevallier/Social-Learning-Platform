import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";
import { Link, withRouter } from "react-router-dom";
const loading = {
  margin: "1em",
  fontSize: "24px"
};
const title = {
  pageTitle: "Password Reset Screen"
};

export default class ResetPassword extends Component {
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
    console.log("loading");
    console.log(this.props.match.params.token);
    await axios
      .get("Users/reset", {
         params: {
          resetPasswordToken: this.props.match.params.token
         }
      })
      .then(response => {
        console.log(response);
        if (response.data.message == "password reset link is ok") {
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
   
      axios
        .put("/Users/updatePasswordViaEmail", {
          username: this.state.username,
          password: this.state.password,
        })
        .then(response => {
          console.log(response.data);
          if (response.data == "password updated") {
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
      console.log(error);
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
        <div>
        
          <form className="password-form" onSubmit={this.updatePassword}>
            <TextField
              id="password"
              label="password"
              value={password}
              onChange={this.handleChange("password")}
              placeholder="New Password"
              type="password"
            />
            <Button buttonText={"Update Password"} />
          </form>
          {updated && (
            <div>
              <p>
                {" "}
                Your password has been successfully reset! Go ahead and try logging in again.
              </p>
              <Link to={"/SignInForm"}>
                <Button variant="contained" color="primary">
                  Login
                </Button>
              </Link>
            </div>
          )}

          <Link to={"/"}>
            <Button variant="contained" color="primary">
              Go Home
            </Button>
          </Link>
        </div>
      );
    }
  }
}


