import React, { Component } from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Autocomplete from "@material-ui/lab/Autocomplete";




 export class SignUpMentor extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    previous = e => {
      e.preventDefault();
      this.props.prevStep();
    };
    
    
    render() {
      const { handleChange,onTagsChange } = this.props;
      return (
        <MuiThemeProvider >
          <React.Fragment>
            <div style = {container}>
          
              {/* <TextField
                
                placeholder="Enter your Mentor Subjects"
                label="Mentor Subject"
                onChange={handleChange('mentorSubject')}
                defaultValue={values.mentorSubject}
                margin="normal"
                              fullWidth="true"
              /> */}
              <Autocomplete
              multiple
              id="tags-outlined"
              options={subjects}
              getOptionLabel={option => option.title}
              filterSelectedOptions
              onChange={onTagsChange}
              renderInput={params => (
                <TextField
                  {...params}
                  
                  variant="outlined"
                  label="Mentor Subjects"
                  placeholder="Your first subject will be your primary"
                  margin="normal"
                  fullWidth
                />
              )}
            />
              <br />
              {/* <TextField
                placeholder="Enter your years of experience"
                label="Subject experience"
                onChange={handleChange('yearsExp')}
                defaultValue={values.yearsExp}
                margin="normal"
                              fullWidth="true"
              /> */}
              {/* <div style = {container}> */}
              <FormControl margin="normal" fullWidth="true">
                <InputLabel htmlFor="exp">Primary Mentor Subject Experience</InputLabel>
                <Select
                  style={{width: 300}}
                  native
                  // value={this.state.age}
                  onChange={handleChange('yearsExp')}
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
              {/* </div> */}
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
const subjects = [
  { title: "Computer Science"},
  { title: "Mathematics"},
  { title: "Biology"},
  { title: "Chemistry" },
  { title: "Cooking" },
  { title: "Forensics" }
];

 export default SignUpMentor
