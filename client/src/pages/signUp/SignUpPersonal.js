import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { withStyles, makeStyles } from '@material-ui/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

const styles = theme => ({
  root:{
    border: 0,
    padding: '0 32px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  }
})

export class SignUpPersonal extends Component {
  skipStep = e =>{
    e.preventDefault();
    this.props.skipStep();
  };
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
    let button;

    if(values.isMentor === true){
      button = <Button color="primary" style = {buttonStyle} variant="contained" onClick={this.continue}>
        Continue
    </Button>
    }else {
      button = <Button color="primary" style = {buttonStyle} variant="contained" onClick={this.skipStep}>
        Continue
      </Button>
    }     

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
              id="date"
              label="Birthdate"
              type="date"
              onChange={handleChange("birthdate")}
              defaultValue={values.birthdate}
              margin="normal"
              fullWidth="true"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange('isMentor')}
                  value="true"
                  color="primary"
                />
              }
              label="Do you want to be a mentor?"
            />
            <br />
            <Button color="primary" style = {buttonStyle} variant="contained" onClick={this.previous}>
              Previous
          </Button>
            {button}
                
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
