import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { HashRouter as Router, withRouter, Route, Redirect,  NavLink, Link } from "react-router-dom";
import {MuiThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NativeSelect from '@material-ui/core/NativeSelect';
import Autocomplete from "@material-ui/lab/Autocomplete";
import Select from 'react-dropdown-select';
import { Thumbnail } from 'react-bootstrap';

 class EditProfileForm extends Component {
    constructor() {
        super();
        this.state = {
            user_id:'',
            firstName: '',
            lastName: '',
            email: '',
            birthdate: '',
            gender:'',
            summary: '',
            interests: {},
            country: '',
            province: '',
            city: '',
          }
     }
      componentDidMount(){
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
          user_id: decoded.user_id,
          firstName: decoded.firstname,
          lastName: decoded.lastname,
          isMentor: decoded.mentor_id,
          email: decoded.email,
          birthdate:decoded.bdate,
          summary: decoded.summary,
          interests: decoded.interests,
          city: decoded.city,
          gender: decoded.gender,
          country: decoded.country,
          province: decoded.province
        })
      }
      
      handleChange = input => e => {
            this.setState({
                [input]: e.target.value
            });
        };
   
      updateProfile = e =>{
        e.preventDefault();
        axios
          .post('/Users/edit', this.state)
          .then(res => {
            if (res.status===200){
              
              // this.props.history.go(0);
              this.props.history.push('/profile-page')


            }
            else{
              window.alert(JSON.stringify(res.data));
            }
          } 
            )
          .catch(err => {
            console.error(err);
          });
      }
    
    render() {
      const { values, handleChange, onTagsChange } = this.props;
        
        return (
          <MuiThemeProvider >
            <React.Fragment>

              <div style = {container}>
                <h1> Edit Profile</h1>
                <TextField
                  
                  
                  label="First Name"
                  onChange={this.handleChange('firstName')}
                  defaultValue={this.state.firstName}
                  value={this.state.firstName}
                  margin="normal"
                  style={{width:300}}
                                fullWidth="true"
                />
        
                <TextField 
                  
                  style={{width:300,marginLeft:20}}
                  label="Last Name"
                  onChange={this.handleChange('lastName')}
                  value={this.state.lastName}
                  defaultValue={this.state.lastName}
                  margin="normal"
                                fullWidth="true"
                />
                <br />

                <NativeSelect style={{width: 300,marginTop:20}}
                  id="demo-customized-select-native"
                  name='gender'
                  onChange={this.handleChange('gender')}
                  value={this.state.gender}
                >
                  
                  <option value="">Choose Your Gender</option> 
                  <option value={"Male"}>Male</option>
                  <option value={"Female"}>Female</option>
                  <option value={"Other"}>Other</option>
                  
                </NativeSelect>
                <br/>
                <TextField
                  style={{width: 300,marginTop:20}}
                  id="date"
                  label="Birthdate"
                  type="date"
                  onChange={this.handleChange("birthdate")}
                  margin="normal"
                  fullWidth="true"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <br />
                <TextField
                  label="Email"
                  onChange={this.handleChange('email')}
                  defaultValue={this.state.email}
                  value={this.state.email}
                  margin="normal"
                  style={{width:620}}
                                fullWidth="true"
                />
                <br />
                <NativeSelect style={{width: 300,marginTop:20}}
                  id="demo-customized-select-native"
                  name='country'
                  onChange={this.handleChange('country')}
                  value={this.state.country}
                >
                  <option value="">Choose Your Country</option> 
                  <option value={"Canada"}>Canada</option>
                  {/* <option value={"United States"}>United States</option> */}
                  
                </NativeSelect>
                
                <NativeSelect style={{width: 300,marginLeft:20,marginTop:20}}
                  id="demo-customized-select-native"
                  name='province'
                  onChange={this.handleChange('province')}
                  value={this.state.province}
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
                  label="City"
                  onChange={this.handleChange("city")}
                  defaultValue={this.state.city}
                  value={this.state.city}
                  margin="normal"
                  fullWidth="true"
                  style={{width:620}}
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
                  label="Interests"
                  placeholder="Your first interest will be your primary"
                  defaultValue={this.state.interests}
                  margin="normal"
                  
                  fullWidth
                />
                )}
                />
                
                <br/>

                <TextField
                  id="standard-textarea"
                  label="Personal Summary"
                  value={this.state.summary}
                  defaultValue={this.state.summary}
                  multiline
                  fullWidth="true"
                  rows = "4"
                  margin="normal"
                  onChange={this.handleChange('summary')}
                />
                
                <br />
                <Button
                  color="primary"
                  variant="contained"
                  onClick={this.updateProfile}
                >Update profile
                </Button>
                
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
const interests = [
  { title: "Computer Science"},
  { title: "Mathematics"},
  { title: "Biology"},
  { title: "Chemistry" },
  { title: "Cooking" },
  { title: "Forensics" }
];
export default withRouter(EditProfileForm);