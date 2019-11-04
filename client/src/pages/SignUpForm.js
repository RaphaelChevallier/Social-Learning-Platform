import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SignUpFirst from './SignUpFirst';
import SignUpMentor from './SignUpMentor';
import SignUpPersonal from './SignUpPersonal';
import Confirm from './Confirm';
import Success from './Success';

class SignUpForm extends Component{
    
  
  state={
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passVerify: '',
            city: '',
            summary: '',
            bio: '',
            hasAgreed: false
        };
  
    
  nextStep=() =>{
    const {step} = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep =() =>{
    const {step} = this.state;
    this.setState({
      step: step - 1
    });
  };
  handleChange = input => e => {
 
    //let target = e.target;
   //let value = target.type === "checkbox" ? target.checked : target.value;
    //let name = target.name;

        this.setState({
            [input]: e.target.value
        });
    
    };

    lastSubmit(e){
   
      e.preventDefault();
      let pass = e.target.password
      let ver = e.target.passVerify

       
        
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
          //This is where they failed to do the registration here. Probably under here have code that empties all the fields
          //Also no terms of service button validation on front end part. Make sure all front end form validation is taken care of so we have both backend and frontend validation
          this.setState({
            email: '',
            password: '',
            passVerify: '',
            name: '',
            hasAgreed: false
        });
          
      
      }
        })
        .catch(err => {
          console.error(err);
        });
    }



    render(){
      const { step } = this.state;
      const { firstName, lastName, email, passVerify, city, bio} = this.state;
      const values = {firstName, lastName, email, passVerify, city, bio};
      
      switch (step) {
        case 1: 
        return (
          <SignUpFirst
            nextStep = {this.nextStep}
            handleChange={this.handleChange.bind(this)}
            values = {values}/>
        );
        case 2: 
        return (
          <SignUpMentor
            nextStep = {this.nextStep}
            prevStep = {this.prevStep}
            handleChange={this.handleChange.bind(this)}
            values = {values}/>
        );
        case 3: 
        return (
          <SignUpPersonal
            nextStep = {this.nextStep}
            prevStep = {this.prevStep}
            handleChange={this.handleChange.bind(this)}
            values = {values}/>
        );
        case 4: 
        return (
          <Confirm
            nextStep = {this.nextStep}
            prevStep = {this.prevStep}
            handleChange={this.handleChange.bind(this)}
            values = {values}/>
        );

        case 5: 
        return (
          <Success/>
        );
      }
      
      
      
    }
}
export default SignUpForm;
