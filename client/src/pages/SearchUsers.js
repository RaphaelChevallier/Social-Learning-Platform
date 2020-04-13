import React, { Component } from "react";
import { HashRouter as Router, withRouter, Route, NavLink, Link } from "react-router-dom";
import axios from 'axios';
import { MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Table from "./Table";


class SearchUsers extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      interest: "",
      wantMentor: false,
      isSubmitted: false,
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = input => e => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    if(e.target.type === "checkbox"){
      this.setState({
        [input]: e.target.checked
      });
    } else{
      this.setState({
        [input]: value
      });
    }
  }

  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.wantMentor){
      axios
      .post('/Search/findMentor', this.state)
      .then(res => {
        this.setState({data: res.data})
        this.setState({isSubmitted: true})

      } 
        )
      .catch(err => {
        console.error(err);
      });
    }else{
    axios
      .post('/Search/findUser', this.state)
      .then(res => {
        this.setState({data: res.data})
        this.setState({isSubmitted: true})

      } 
        )
      .catch(err => {
        console.error(err);
      });
    }
  }
  render() {
    var tableOrNot
    if(this.isEmpty(this.state.data)){
      tableOrNot =  <h1>Can't find any users!</h1>
    }else{
      tableOrNot =  <div><Table data={this.state.data}/> </div>
    }
    return (
      <MuiThemeProvider >
            <React.Fragment>
              <div style = {container}>
                <TextField
                  placeholder="Enter a name"
                  name="name"
                  label="Name"
                  margin="normal"
                  fullWidth="true"
                  onChange={this.handleChange('name')}
                />
                <br/>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={this.handleChange('wantMentor')}
                      value="true"
                      color="primary"
                    />
                  }
                  label="Do you want to search for a mentor?"
                />
                <br />
                  {this.state.wantMentor && 
                    <TextField
                      placeholder="Enter an interest subject"
                      name="subject"
                      label="Subject"
                      margin="normal"
                      fullWidth="true"
                      onChange={this.handleChange('interest')}
                    />
                  }
                <br/>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={this.handleSubmit}
                >Search</Button>
                <br/>
                
                {this.state.isSubmitted && tableOrNot}
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
// const footer = {
// flexShrink: "0",
// textAlign: "center",
// backgroundColor: "orange",
// color: "white"
// }

export default withRouter(SearchUsers);
