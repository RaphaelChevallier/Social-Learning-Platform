import React, { Component } from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class SignUpFirst extends Component {
    continue = e =>{
        // e.preventDefault();
        this.props.nextStep();
    }
    
    
    render() {
        const { values, handleChange } = this.props;
        return (
          <MuiThemeProvider >
            <React.Fragment>
              <div style = {container}>
                
                <TextField
                  
                  placeholder="Enter Your First Name"
                  label="First Name"
                  onChange={handleChange('firstName')}
                  defaultValue={values.firstName}
                  
                  margin="normal"
                                fullWidth="true"
                />
                <br />
        
                <TextField
                  placeholder="Enter Your Last Name"
                  label="Last Name"
                  onChange={handleChange('lastName')}
                  defaultValue={values.lastName}
                  margin="normal"
                                fullWidth="true"
                />
                <br />
                <TextField
                  placeholder="Enter Your Email"
                  label="Email"
                  onChange={handleChange('email')}
                  defaultValue={values.email}
                  margin="normal"
                                fullWidth="true"
                />
                <br />
                <TextField
                  placeholder="Enter Your Password"
                  label="Password"
                  onChange={handleChange('password')}
                  defaultValue={values.password}
                  type="password"
                  margin="normal"
                  fullWidth="true"
                />
                <br />
                <TextField
                  placeholder="Re-Enter Your Password"
                  label="Re-Enter Your Password"
                  onChange={handleChange('passVerify')}
                  defaultValue={values.passVerify}
                  type="password"
                  margin="normal"
                  fullWidth="true"
                />
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
const footer = {
  flexShrink: "0",
  textAlign: "center",
  backgroundColor: "orange",
  color: "white"
}
export default SignUpFirst;