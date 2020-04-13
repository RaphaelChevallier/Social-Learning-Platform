import React, { Component } from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FormLabel } from '@material-ui/core';
import SimpleReactValidator from 'simple-react-validator';

export class SignUpFirst extends Component {
  constructor() {
    super();
    this.validator = new SimpleReactValidator();
  }
    continue = e =>{
      //the validation before moving on
      if(this.validator.allValid()){
        this.props.nextStep();
      }
      else{
        this.validator.showMessages();

        this.forceUpdate();
      }
    
        // e.preventDefault();
       
    }

    
    render() {
        const { values, handleChange } = this.props;
        return (
          <MuiThemeProvider >
            <React.Fragment>
              <div style = {container}>
              <h1>Sign Up</h1>
                <TextField
                  
                  placeholder="Enter Your First Name"
                  label="First Name"
                  onChange={handleChange('firstName')}
                  defaultValue={values.firstName}
                  style={{width:300}}
                  margin="normal"
                                fullWidth="true"
                />
                <br/>
                {this.validator.message('firstName', this.props.values.firstName, 'required|alpha')}
        
                <TextField
                  style={{width:300,marginLeft:20}}
                  placeholder="Enter Your Last Name"
                  label="Last Name"
                  onChange={handleChange('lastName')}
                  defaultValue={values.lastName}
                  margin="normal"
                                fullWidth="true"
                />
                {this.validator.message('lastName', this.props.values.lastName, 'required|alpha')}
                <br />
                <TextField
                  id="date"
                  label="Birthdate"
                  type="date"
                  onChange={handleChange("birthdate")}
                  defaultValue={values.birthdate}
                  margin="normal"
                  fullWidth="true"
                  style={{width:300}}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <br />
                <TextField
                  placeholder="Enter Your Email"
                  label="Email"
                  onChange={handleChange('email')}
                  defaultValue={values.email}
                  margin="normal"
                  style={{width:620}}
                                fullWidth="true"
                />
                {this.validator.message('email', values.email, 'required|email')}
                <br />
                <TextField
                  placeholder="Enter Your Password"
                  label="Password"
                  onChange={handleChange('password')}
                  defaultValue={values.password}
                  type="password"
                  margin="normal"
                  style={{width:300}}
                  fullWidth="true"
                />
                {this.validator.message('password', this.props.values.password, 'required|alpha_num')}
                <br />
                <TextField
                  placeholder="Re-Enter Your Password"
                  label="Re-Enter Your Password"
                  onChange={handleChange('passVerify')}
                  defaultValue={values.passVerify}
                  type="password"
                  margin="normal"
                  style={{width:300,marginLeft:20}}
                  fullWidth="true"
                />
                {this.validator.message('passVerify', this.props.values.passVerify, 'required|in:'+this.props.values.password)}
                <br />
                <Button
                  color="primary"
                  variant="contained"
                  onClick={this.continue}
                >Continue</Button>
                
                
              
                </div>
                
            
            </React.Fragment>
          </MuiThemeProvider>
        );
      }
    }
    
const container = {
    margin: '150px',
    border: '5px orange'

};

export default SignUpFirst;