import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import ProgressBar from "react-bootstrap/ProgressBar";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { withStyles } from '@material-ui/styles';
import clsx from 'clsx';


const styles = theme => ({
  root:{
    border: 0,
    padding: '0 32px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  }
})
export class SignUpPersonal extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  previous = e => {
    e.preventDefault();
    this.props.prevStep();
  };


    render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div style={container}>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={interests}
              getOptionLabel={option => option.title}
              defaultValue={[interests[4]]}
              filterSelectedOptions
              
              renderInput={params => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="interests"
                  placeholder="Your first interest will be your primary"
                  margin="normal"
                  fullWidth
                />
              )}
            />
            <TextField
              placeholder="Enter Your City"
              label="City"
              onChange={handleChange("city")}
              defaultValue={values.city}
              margin="normal"
              fullWidth="true"
            />
            <br />
            <TextField
              placeholder="Enter Your Birthdate"
              label="Birthdate"
              onChange={handleChange("birthdate")}
              defaultValue={values.birthdate}
              margin="normal"
              fullWidth="true"
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange("email")}
              defaultValue={values.email}
              margin="normal"
              fullWidth="true"
            />
            <br />
            <Button color="primary" style = {buttonStyle} variant="contained" onClick={this.previous}>
                Previous</Button>
                <Button color="primary" style = {buttonStyle} variant="contained" onClick={this.continue}>
              Continue
            </Button>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const container = {
  margin: "150px",
  border: "5px orange"
};
const buttonStyle = {

  
 
  padding: "0 32 px",
  margin: "0 64px",
  border: "5px orange"
};
const interests = [
  { title: "Computer Science"},
  { title: "Mathematics"},
  { title: "Biology"},
  { title: "Chemistry" },
  { title: "Cooking" },
  { title: "Forensics" }
];

export default withStyles(styles)(SignUpPersonal);
