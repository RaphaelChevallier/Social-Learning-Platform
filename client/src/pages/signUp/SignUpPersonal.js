import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { withStyles } from '@material-ui/styles';
import Checkbox from '@material-ui/core/Checkbox';
// import Chip from '@material-ui/core/Chip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import NativeSelect from '@material-ui/core/NativeSelect';


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
    const { values, handleChange, onTagsChange } = this.props;
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
            <br/>
              <NativeSelect style={{width: 300,marginTop:20}}
                  id="demo-customized-select-native"
                  name='country'
                  onChange={handleChange("country")}
                >
                  <option value="">Choose Your Country</option> 
                  <option value={"Canada"}>Canada</option>  
                </NativeSelect>
                
                <NativeSelect style={{width: 300,marginLeft:20,marginTop:20}}
                  id="demo-customized-select-native"
                  name='province'
                  onChange={handleChange("province")}
                >
                  <option value="">Choose Your Province/Territory</option> 
                  <option value={"BC"}>British Columbia</option>
                  <option value={"NL"}>Newfoundland and Labrador</option>
                  <option value={"AB"}>Alberta</option>
                  <option value={"PE"}>Prince Edward Island</option>
                  <option value={"ON"}>Ontario</option>
                  <option value={"QC"}>Quebec</option>
                  <option value={"MB"}>Manitoba</option>
                  <option value={"SK"}>Saskatchewan</option>
                  <option value={"NS"}>Nova Scotia</option>
                  <option value={"NB"}>New Brunswick</option>
                  <option value={"YT"}>Yukon</option>
                  <option value={"NU"}>Nunavut</option>
                  <option value={"NT"}>Northwest Territories</option>
                </NativeSelect>
            <br/>
            <TextField
              placeholder="Enter Your City"
              label="City"
              onChange={handleChange("city")}
              defaultValue={values.city}
              margin="normal"
              fullWidth="true"
              style={{width: 620,}}
            />
            <br />
            
            <Autocomplete
              multiple
              id="tags-outlined"
              options={interests}
              getOptionLabel={option => option.title}
              filterSelectedOptions
              onChange={onTagsChange}
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
