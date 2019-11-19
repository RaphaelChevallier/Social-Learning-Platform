import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


class LearnerProfile extends Component {
    constructor() {
        super();
        this.state = {
          firstName: '',
          lastName: '',
          email: '',
          birthdate: '',
          summary: '',
          interests: [{}],
          city: '',
          expLevel: ''
        }
      }

      componentDidMount(){
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
          firstName: decoded.firstname,
          lastName: decoded.lastname,
          email: decoded.email,
          birthdate: decoded.bdate,
          summary: decoded.summary,
          interests: decoded.interests,
          city: decoded.city,
          expLevel: decoded.level_of_experience_primary_interest
        })
      }

    render() { 
      const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));

        return (
          <div className={useStyles.root}>
            <Grid container spacing={3}  alignItems="center" justify="center" direction="column">
              <Grid item xs={8}>
                <Paper className={useStyles.paper}>xs=12 dfasdfdsfadsfadsf</Paper>
              </Grid>
              <Grid container spacing={3} direction="row">
                <Grid item xs={8} sm={2} >
                  <Paper className={useStyles.paper}>xs=12 sm=3</Paper>
                </Grid>
                <Grid item xs={8} sm container>
                  <Grid container spacing={3} direction="column" justify="center" alignItems="center">
                    <Grid item xs={6} sm={4} >
                      <Paper className={useStyles.paper}>xs=12 sm=6 fdasfda dsfadsfaadsfasfadsfadsfasdfa</Paper>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <Paper className={useStyles.paper}>xs=6 sm=6dafdsafdsfasdfasdfasdfasdfadsfasdf</Paper>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <Paper className={useStyles.paper}>xs=6 sm=6dsfadsfasdfadsfadsfadsfadsfadsfadsf</Paper>
                    </Grid>
                  </Grid>
                </Grid>
                  <Grid item xs={6} sm={2}>
                    <Paper className={useStyles.paper}>xs=6 sm=3</Paper>
                  </Grid>
                </Grid>
            </Grid>
          </div>
        );
      }
}


export default LearnerProfile;
