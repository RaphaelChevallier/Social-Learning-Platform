import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class SignUpForm extends Component{
    constructor(){
        super();
        this.state={
            email: '',
            password: '',
            verify: '',
            name: '',
            hasAgreed: false
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

    lastSubmit(e){
   
      e.preventDefault();
      let pass = e.target.password
      let ver = e.target.verify

       
        
      axios
        .post('/Users/register', this.state)
        .then(res => { 
          if(res.data == true && res.status == 200 && pass === ver){
            console.log(res)
            console.log("Congrats you have just registered!")
            //This is where the registration was a success
            //Put here the routing to the next react page for the extra questions or rerender current page to show new component
          }else {
          if(res.data == "Duplicate entries of email"){
            window.alert("This email is already taken. Please provide another email"); //Probably prettify these of some kind or have a way to make the boxes pop red or something
          } else if (res.data.name) {
            window.alert(res.data.name);
          }else if (res.data.email) {
            window.alert(res.data.email);
          }else if(res.data.password){
            window.alert(res.data.password);
          } else if (res.data.hasAgreed) {
            window.alert(res.data.hasAgreed);
          } else if(pass !== ver){
            window.alert("Please ensure the passwords match")
          }
          else{
            window.alert("Please reenter your registration information");
          }
          //This is where they failed to do the registration. Probably under here have code that empties all the fields
          //Also no terms of service button validation on front end part. Make sure all front end form validation is taken care of so we have both backend and frontend validation
          this.setState({
            email: '',
            password: '',
            verify: '',
            name: '',
            hasAgreed: false
        });
          
      
      }
        })
        .catch(err => {
          console.error(err);
        });
    }


    handleSubmit(e){
      e.preventDefault();
    }

    render(){
        return(
            <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField_Label" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="FormField_Input"
                  placeholder="Enter your full name"
                  name="name"
                  value={this.state.name} onChange={this.handleChange}
                />
              </div>
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
                  value={this.state.email} onChange={this.handleChange}
                />
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
                  value={this.state.password} onChange={this.handleChange}
                />
              </div>
              <div className="FormField">
                <label className="FormField_Label" htmlFor="verify">
                  Verify Password
                </label>
                <input
                  type="password"
                  id="verify"
                  className="FormField_Input"
                  placeholder="Re-enter your password"
                  name="verify"
                  value={this.state.verify} onChange={this.handleChange}
                />
              </div>
              <div className="FormField">
               
              </div>
              <div className="FormField">
              <label className="FormField_CheckboxLabel">
                <input
                  className="FormField_Checkbox"
                  type="checkbox"
                  name="hasAgreed"
                  value={this.state.hasAgreed} onChange={this.handleChange}
                />
                I agree all to all statements in
                <a href="" className="FormField_TermsLink">
                  terms of service
                </a>
              </label>
              </div>
              <div className="FormField">
                <button className="FormField_Button mr-20">Sign Up</button>
                <Link to="/sign-in" className="FormField_Link">
                   I'm already a member
                </Link>
              </div>
            
            </form>
            </div>
        );
    }
}
export default SignUpForm;
