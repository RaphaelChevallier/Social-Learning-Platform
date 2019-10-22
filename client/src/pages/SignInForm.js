
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

//   callAPI() {
//     fetch("http://localhost:5000/Users")
//         .then(res => res.text())
//         .then(res => this.setState({ apiResponse: res }))
//         .catch(err => err);
// }

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
      .post('http://localhost:5000/Users/signIn', this.state)
      .then(() => console.log('User Info sent to Backend for validation'))
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
