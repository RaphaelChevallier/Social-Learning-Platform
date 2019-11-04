
import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';

export class SignUpPersonal extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    
    
    render() {
        
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title ="Enter Personal Details"/>
                    <TextField
                    hintText="Enter Your Occupation"
                    floatingLabelText="occupation"
                    onChange={handleChange('occupation')}
                    defaultValue={values.occupation}
                    />
                    <br/>
                    <TextField
                    hintText="Enter Your City"
                    floatingLabelText="City"
                    onChange={handleChange('city')}
                    defaultValue={values.city}
                    />
                    <br/>
                    <TextField
                    hintText="Enter Your Email"
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    />
                    <br/>
                    <RaisedButton
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
    }
}

export default SignUpPersonal
