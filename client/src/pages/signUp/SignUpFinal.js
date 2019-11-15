import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import {MuiThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Autocomplete from "@material-ui/lab/Autocomplete";
import Select from '@material-ui/core/Select';


 export class SignUpFinal extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    previous = e => {
      e.preventDefault();
      this.props.prevStep();
    };
    
    
    render() {
      const { values, handleChange } = this.props;
      return (
        <MuiThemeProvider >
          <React.Fragment>
            <div style = {container}>
              <Autocomplete
                multiple
                id="tags-outlined"
                options={expLevel}
                getOptionLabel={option => option.title}
                defaultValue={[expLevel[0]]}
                filterSelectedOptions
                
                renderInput={params => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Primary Interest Experience"
                    placeholder="Choose the experience level that best reflects you"
                    margin="normal"
                    fullWidth
                  />
                )}
              />
              <br />
          
              <TextField
                id="standard-textarea"
                label="Personal Summary"
                placeholder="Tell others a litte about yourself"
                multiline
              
                margin="normal"
              />
              <br />
              <Button color="primary" style = {buttonStyle} variant="contained" onClick={this.previous}>
                Previous</Button>
              <Button
                color="primary"
                variant="contained"
                style = {buttonStyle}
                onClick={this.continue}
              >Continue</Button>
            </div>
          </React.Fragment>
        </MuiThemeProvider>
      );
    }
  }
  
  const buttonStyle = {

  
 
    padding: "0 32 px",
    margin: "0 64px",
    border: "5px orange"
  };
  const container = {
    margin: '150px',
    border: '5px orange'

};

const expLevel= [
    { title: "Novice"},
    { title: "Intermediate"},
    { title: "Proficient" },
    { title: "Professional"},
    { title: "Master" }
    
   
  ];
  

 export default SignUpFinal
