import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

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

    console.log("The form was submitted with the following data:");
    console.log(this.state);
    axios
      .post('/Users/signIn', this.state)
      .then(res => {
        if (Array.isArray(res.data) && res.status===200){
          var isLoggedIn= res.data[0];
          var isMentor= res.data[1];
          console.log(isLoggedIn);
          if (isLoggedIn===true){
            sessionStorage.setItem(isLoggedIn,true);
          }
          if (isMentor===true){
            sessionStorage.setItem(isMentor,true);
          }
        }
        else{
          window.alert(res.data);
        }
      } 
        )
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    return (
      <div className="FormCenter">
        <form
          onSubmit={this.handleSubmit}
          className="FormFields"
          onSubmit={this.handleSubmit}
        >
          <div className="FormField">
            <label className="FormField_Label" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="FormField_Input"
              placeholder="Enter your email"
              name="email"
            
             
              value ={this.state.email} onChange={this.handleChange}/>
           
          </div>

          <div className="FormField">
            <label className="FormField_Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField_Input"
              placeholder="Enter your password"
              name="password"
              value ={this.state.password} onChange={this.handleChange}/>
           
          </div>

          <div className="FormField">
            <button className="FormField_Button2 mr-20">Sign In</button>
            <Link to="/" className="FormField_Link">
              Create an Account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default SignInForm;
