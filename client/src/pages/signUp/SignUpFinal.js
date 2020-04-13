//Reference: https://stackoverflow.com/questions/51605481/how-to-make-a-select-component-as-required-in-material-ui-react-js
import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import {MuiThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


const container = {
    margin: '150px',
    border: '5px orange'

};
  
  const SignUpFinal = ({nextStep, prevStep, skipPrev, values, handleChange}) => {
    let button;


    if(values.isMentor === true){
      button = <Button color="primary" style = {buttonStyle} variant="contained" onClick={prevStep}>
        Previous
    </Button>
    }else {
      button = <Button color="primary" style = {buttonStyle} variant="contained" onClick={skipPrev}>
        Previous
      </Button>
    }
  
  
    
  
    return (
        <MuiThemeProvider >
        <React.Fragment>
      <div style = {container}>
        <FormControl margin="normal" fullWidth="true">
                <InputLabel htmlFor="exp">Personal Experience Level</InputLabel>
                <Select
                  style={{width: 300}}
                  native
                  onChange={handleChange('expLevel')}
                  inputProps={{
                    name: 'experience',
                    id: 'expLevel',
                  }}
                >
                  <option value="" />
                  <option value={"Novice"}>Novice</option>
                  <option value={"Intermediate"}>Intermediate</option>
                  <option value={"Proficient"}>Proficient</option>
                  <option value={"Professional"}>Professional</option>
                  <option value={"Master"}>Master</option>
                </Select>
              </FormControl>
              <br />
        
              <TextField
          id="standard-textarea"
          label="Personal Summary"
          placeholder="Tell others a litte about yourself"
          multiline
         rows = "4"
         fullWidth="true"
          margin="normal"
          onChange={handleChange('summary')}
          style={{width: 620}}
        />
              <br />
              {button}
              <Button
                color="primary"
                variant="contained"
                style = {buttonStyle}
                onClick={nextStep}
              >Continue</Button>
             
           
           </div>
          </React.Fragment>
        </MuiThemeProvider>
      );
    }
  
  
  
    const buttonStyle = {
        padding: "0 32 px",
        margin: "0 64px",
        border: "5px orange"
      };

    export default SignUpFinal;