import React, {Component} from 'react';
import { HashRouter as Router, withRouter, Route, NavLink, Link } from "react-router-dom";
import axios from 'axios';
import SignUpFirst from './SignUpFirst';
import SignUpMentor from './SignUpMentor';
import SignUpPersonal from './SignUpPersonal';
import Confirm from './Confirm';
import Success from './Success';
import SignUpFinal from './SignUpFinal';

class SignUpForm extends Component{
    constructor(){
      super();
  
      this.state={
              step: 1,
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              passVerify: '',
              city: '',
              birthdate: null,
              summary: '',
              interests: {},
              mentorSubject: '',
              yearsExp: '',
              isMentor: false,
              expLevel: '',
              hasAgreed: false
          };

          this.lastSubmit = this.lastSubmit.bind(this);
          this.handleChange = this.handleChange.bind(this);
          this.onTagsChange = this.onTagsChange.bind(this);
      }

onTagsChange = (event, values) => {
      this.setState({
        interests: Object.assign({}, values)
      });
    }
  skipStep=() =>{
    const {step} = this.state;
    this.setState({
      step: step + 2
    });
  };
    
  nextStep=() =>{
    const {step} = this.state;
    
    this.setState({
      step: step + 1
    });
  };

  toProfile =()=>{
    this.props.history.push('/profile-page');
  }

  prevStep =() =>{
    const {step} = this.state;
    this.setState({
      step: step - 1
    });
  };

  skipPrev =() =>{
    const {step} = this.state;
    this.setState({
      step: step - 2
    });
  };

  handleChange = input => e => {
    //let target = e.target;
    //let name = target.name;
      if(e.target.type === "checkbox"){
        this.setState({
          [input]: e.target.checked
        });
    
      }else{
        this.setState({
            [input]: e.target.value
        });
      }
      
    };

    lastSubmit(e) {
      if(e){
        e.preventDefault();
      }
      let pass = this.state.password
      let ver = this.state.passVerify

      this.newState ={
        email: this.state.email,
        password: this.state.password
      }
      console.log(this.newState);
      axios
        .post('/Users/register', this.state)
        .then(res => { 
          if(res.data === true && res.status == 200 && pass === ver){
            console.log("Registered")
            axios.post('Users/signin', this.newState)
            .then(res => {
              if (Array.isArray(res.data) && res.status===200){
                var token= res.data[0];
                var isMentor = res.data[1];
                localStorage.setItem('usertoken', token);
                if (isMentor===true){
                  localStorage.setItem('isMentor', true);
                }
              }
            })
            //This is where the registration was a success
            //Put here the routing to the next react page for the extra questions or rerender current page to show new component
          }else {
          if(res.data == "Duplicate entries of email"){
            this.setState({
              step: 1
            });
            window.alert("This email is already taken. Please provide another email"); //Probably prettify these of some kind or have a way to make the boxes pop red or something
          } else if (res.data.name) {
            this.setState({
              step: 1
            });
            window.alert(res.data.name);
          }else if (res.data.email) {
            this.setState({
              step: 1
            });
            window.alert(res.data.email);
          }else if(res.data.password){
            this.setState({
              step: 1
            });
            window.alert(res.data.password);
          } else if (res.data.hasAgreed) {
            this.setState({
              step: 4
            });
            window.alert(res.data.hasAgreed);
          } else if(pass !== ver){
            this.setState({
              step: 1
            });
            window.alert("Please ensure the passwords match")
          }
          else{
            this.setState({
              step: 1
            });
            window.alert("Please reenter your registration information");
          }
          //This is where they failed to do the registration here. Probably under here have code that empties all the fields
          //Also no terms of service button validation on front end part. Make sure all front end form validation is taken care of so we have both backend and frontend validation
          this.setState({
            email: '',
            password: '',
            passVerify: '',
            name: '',
            city: '',
            birthdate: null,
            summary: '',
            interests: {},
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
      const { firstName, lastName, email, password, passVerify, city, birthdate, summary, interests, isMentor, mentorSubject, yearsExp, expLevel} = this.state;
      const values = {firstName, lastName, email, password, passVerify, city, birthdate, summary, interests, isMentor, mentorSubject, yearsExp, expLevel};
      
      switch (step) {
        case 1: 
        return (
          <SignUpFirst
            nextStep = {this.nextStep}
            handleChange={this.handleChange}
            values = {values}/>
        );
        case 2: 
        return (
          <SignUpPersonal
            nextStep = {this.nextStep}
            prevStep = {this.prevStep}
            skipStep = {this.skipStep}
            handleChange={this.handleChange}
            onTagsChange={this.onTagsChange}
            values = {values}/>
        );
        case 3: 
        return (
          <SignUpMentor
            nextStep = {this.nextStep}
            prevStep = {this.prevStep}
            handleChange={this.handleChange}
            values = {values}/>
        );
        case 4: 
        return (
          <SignUpFinal
            nextStep = {this.nextStep}
            prevStep = {this.prevStep}
            skipPrev = {this.skipPrev}
            handleChange={this.handleChange}
            values = {values}/>
        );
        case 5: 
        return (
          <Confirm
            nextStep = {this.nextStep}
            prevStep = {this.prevStep}
            handleChange={this.handleChange}
            handleSubmit={this.lastSubmit}
            values = {values}/>
        );
        case 6: 
        return (
          <Success
          toProfile={this.toProfile}
          />
        );
      }
      
      
      
    }
}
export default withRouter(SignUpForm);
