import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import {MuiThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Select from '@material-ui/core/Select';


export class SignUpFirst extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    
    
    render() {
        
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                   
                   
                    <TextField
                    hintText="Enter Your First Name"
                    floatingLabelText="First Name"
                   
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField
                    hintText="Enter Your Last Name"
                    floatingLabelText="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField
                    hintText="Enter Your Email"
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    />
                    <br/>
                    <Button
                    label = "Continue"
                    primary = {true}
                    style = {styles.button}
                    onClick = {this.continue}
                    />
                </React.Fragment>


            </MuiThemeProvider>
            
        );
        
    }
  
}
const styles = {
    button:{
        margin: 15
    },
    bar:{
        position: 'isAbsolute',
        top: '0%',
        paddingRight:'20%',
        float: 'top',
      

    },
    field:{
        display: 'flex',
        justifyContent: 'center'
    }

}

export default SignUpFirst;
