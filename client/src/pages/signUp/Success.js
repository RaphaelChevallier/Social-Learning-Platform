import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Button from "@material-ui/core/Button";


export class Success extends Component {
  constructor() {
    super();
  }

  toProfile = e =>{
    e.preventDefault();
    this.props.toProfile();
}

  render(){
    return (
      <div>
        <h1>Thank You For Your Submission</h1>

        <br/>

        <Button
          color="primary"
          variant="contained"
          onClick={this.toProfile}
        >To the Profile page
        </Button>
      </div>
    );
  };
}

const container = {
    margin: '150px',
    border: '5px orange'
};

export default withRouter(Success);
