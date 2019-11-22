import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Chip from '@material-ui/core/Chip';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';




class Profile extends Component {
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
          isMentor: decoded.mentor_id,
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
          overflow: 'hidden',
          padding: theme.spacing(0, 3),
        },
        paper: {
          maxWidth: 300,
          margin: `${theme.spacing(1)}px auto`,
          padding: theme.spacing(2),
        },
        orangeAvatar: {
          margin: 10,
          color: '#fff',
          backgroundColor: "#ff8c00",
        },
        button: {
          margin: theme.spacing(1),
        },
        input: {
          display: 'none',
        },
        inline: {
          display: 'inline',
        },
      }));

      function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
      }
      

        return (
          <div className={useStyles.root}>
            <Grid container spacing ={3} alignItems="center" direction="column" style={{ margin: '1em 0px 0px 0px' }}>
              <Paper className={useStyles.paper} style={{width:'60%'}}>
                <Grid container spacing={3}  justify='flex-end' wrap="nowrap" direction="row">
                  <Grid item xs={4} justify='flex-start' alignItems="flex-start">
                    <Avatar style={{margin:' 1.3em auto', backgroundColor:'#ff8c00'}}>R</Avatar>
                  </Grid>
                  <Grid item xs={7} style={{margin:' 5px auto'}}>
                    <Typography variant="h2" component="h3">{this.state.firstName} {this.state.lastName}</Typography>
                    <Typography variant="h6" component="h5">Location: {this.state.city}</Typography>
                    <Typography component="p">I am a {this.state.isMentor === null ? "Learner" : "Mentor"}</Typography>
                    <br/>
                    <Typography component="p">Following: 13</Typography>
                  </Grid>
                  <Grid item xs={3} style={{margin:' 1.3em auto'}}>
                    <Button variant="outlined" color="secondary" className={useStyles.button}>Messages</Button>
                  </Grid>
                </Grid>
              </Paper>
              <Grid container spacing={3} alignItems="center" justify="flex-start" direction="row" style={{ margin: '2.5em 0px 0px 0px' }}>
                <Paper className={useStyles.paper} style={{width:'20%'}} >
                  <Grid item xs={12} >
                    <List component="nav" subheader={<ListSubheader component="div">Courses</ListSubheader>}>
                    <ListItemLink href="#">
                      <ListItemText primary="How to kick a ball" />
                    </ListItemLink>
                    <ListItemLink href="#">
                      <ListItemText primary="Cooking" />
                    </ListItemLink>
                  </List>
                  </Grid>  
                </Paper>
                <Grid container spacing={3} alignItems="center" justify="flex-start" direction="column" style={{ margin: '-7em 0px 0px 0' }}>
                  <Paper className={useStyles.paper} style={{width:'50%', padding:'5px'}} >
                    <Grid item xs={12} >
                    <Typography variant="h6" component="h5">SUMMARY:</Typography>
                    <hr/>
                    <Typography component="p">{this.state.summary}</Typography>
                    </Grid>
                  </Paper>
                  <br/>
                  <Paper className={useStyles.paper} style={{width:'50%', padding:'5px'}} >
                    <Grid item xs={12} >
                    <Typography variant="h6" component="h5">Interests & Achievements:</Typography>
                    <hr/>
                    <Chip label="Cooking" style={{margin: '5px'}}/>
                    <Chip label="Connect it with interests, dont have any on this account" style={{margin: '5px'}}/>
                    <Chip label="Soccer" style={{margin: '5px'}}/>
                    <Chip label="Web Dev" style={{margin: '5px'}}/>
                    </Grid>
                  </Paper>
                  <br/>
                  <Paper className={useStyles.paper} style={{width:'50%', padding:'5px'}} >
                    <Grid item xs={12} >
                    <Typography variant="h6" component="h5">Activity Status & Posts:</Typography>
                    <hr/>
                    <Typography component="p">No Posts so far. Go post now!</Typography>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid container spacing={3} alignItems="center" justify="flex-end" style={{ margin: '-22em 0 0 -4.5em' }}>
                  <Paper className={useStyles.paper} style={{width:'20%'}} >
                  <Grid item xs={12} justify="flex-end">
                  <List className={useStyles.root} subheader={<ListSubheader component="div">Similar Users</ListSubheader>}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Mentor in cooking"
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className={useStyles.inline}
                              color="textPrimary"
                            >
                              Ali Connors
                            </Typography>
                            {" — I can help you boil your pasta like a pro!"}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Student at UBC interested in Web Dev"
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className={useStyles.inline}
                              color="textPrimary"
                            >
                              Stevens Stevenson
                            </Typography>
                            {" — Contact me so we can learn together! Maybe even meetup if we're in the same city"}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Mentor in Soccer"
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className={useStyles.inline}
                              color="textPrimary"
                            >
                              Sandra Adams
                            </Typography>
                            {' — I can help you improve your kicks'}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </List>
                  </Grid>
                  </Paper>
                </Grid>
              </Grid>
              {/* <Grid container spacing={3} direction="row">
                <Grid item xs={8} sm={2} >
                  <Paper className={useStyles.paper}>xs=12 sm=3</Paper>
                </Grid>
                <Grid item xs={8} sm container>
                  <Grid container spacing={3} direction="column" justify="center" alignItems="center">
                    <Grid item xs={6} sm={4} >
                    <Typography className={useStyles.paper}>xs=12 sm=6 fdasfda dsfadsfaadsfasfadsfadsfasdfa</Typography>
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
                </Grid> */}
                </Grid>
          </div>
        );
      }
}


export default Profile;
