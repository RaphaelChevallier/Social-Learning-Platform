//Reference: https://stackoverflow.com/questions/51605481/how-to-make-a-select-component-as-required-in-material-ui-react-js

import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {MuiThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Autocomplete from "@material-ui/lab/Autocomplete";
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';


const container = {
    margin: '150px',
    border: '5px orange'

};
const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  const SignUpFinal = ({nextStep, prevStep}) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
      experience: '',
      name: 'hai',
    });
  
    // const inputLabel = React.useRef(null);
    // const [labelWidth, setLabelWidth] = React.useState(0);
    // React.useEffect(() => {
    //   setLabelWidth(inputLabel.current.offsetWidth);
    // }, []);
  
    const handleChange = name => event => {
      setState({
        ...state,
        [name]: event.target.value,
      });
    };
    
  
    return (
        <MuiThemeProvider >
        <React.Fragment>
      <div style = {container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="exp">Experience</InputLabel>
          <Select
            native
            value={state.age}
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
          margin="normal"
        />
              <br />
              <Button color="primary" style = {buttonStyle} variant="contained" onClick={prevStep}>
                Previous</Button>
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