import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Thanks from '../../thankYou.jpg';

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
      <div style={{ width: '100%' }}>

        <Box display="flex" flexDirection="column" alignItems="center" p={1} m={1} bgcolor="background.paper">
          <Box p={1}>
            <img src={Thanks} alt="ThankYou" style={{ alignItems: "center", width: '60%', height: '40%' }}/>
          </Box>

          <br/>

          <Box p={1}>
            <h1>Thank You For Your Submission</h1>
          </Box>

          <br/>

          <Box p={1}>
            <Button
              color="primary"
              variant="contained"
              onClick={this.toProfile}
            >To the Profile page
            </Button>
          </Box>
        </Box>

      </div>
    );
  };
}

const container = {
    margin: '150px',
    border: '5px orange'
};

export default withRouter(Success);
