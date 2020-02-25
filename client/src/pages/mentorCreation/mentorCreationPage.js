import React, { Component } from "react";
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import NativeSelect from '@material-ui/core/NativeSelect';
import {DropzoneDialog} from 'material-ui-dropzone';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import jwt_decode from 'jwt-decode';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Link from '@material-ui/core/Link';



class MentorCreationPage extends Component {
    constructor() {
        super();
        this.state = {
            title:'',
            description:'',
            typeOfContent:'',
            files: [],
            open: false,
            link:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount(){
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        const hour = new Date().getHours();
        const minute = new Date().getMinutes();
        const sec = new Date().getSeconds();
        this.setState({
          firstNameLetter: decoded.firstname[0],
          lastNameLetter: decoded.lastname[0],
          firstName: decoded.firstname,
          lastName: decoded.lastname,
          isMentor: decoded.mentor_id,
          email: decoded.email,
          birthdate: decoded.bdate,
          summary: decoded.summary,
          interests: decoded.interests,
          city: decoded.city,
          expLevel: decoded.level_of_experience_primary_interest,
          date: month + '/' + date + '/' + year + " " + hour +":" + minute + ":" + sec
        })
      }


      handleClose() {
        this.setState({
            open: false
        });
    }

    preventDefault = event => event.preventDefault();

    handleOpen() {
        this.setState({
            open: true,
        });
    }

    handleSave(files) {
        //Saving files to state for further use and closing Modal.
        this.setState({
            files: files, 
            open: false,
        });
    }

    handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
        [name]: value
    });
    }

    handleSubmit(e) {
        e.preventDefault();

        axios
            .post('/MentorPosts/createPost', this.state)
            .then(res => {
                
            } 
            )
            .catch(err => {
            console.error(err);
            });
    }

      render(){
          const name = this.state.firstNameLetter + this.state.lastNameLetter;
          const date = new Date().getDate();
          const month = new Date().getMonth() + 1;
          const year = new Date().getFullYear();
          return(
              <div>
                  <Grid container xs={12} spacing={3} direction="row" alignItems="center">
                    <Grid item xs={4} spacing={3} alignItems="flex-start" direction="column" justify="center" style={{margin: '1em 5em'}}>
                        <Grid item xs>
                            <Typography variant="h2" component="h3">Create your post</Typography>
                        </Grid>
                        <br/>
                        <Typography variant="h5" component="h6">Title:</Typography> 
                        <Grid item xs>
                        <TextField style={{width: '20em'}}
                            id="outlined-basic"
                            name="title"
                            label="Title"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                        </Grid>
                        <br/>
                        <Typography variant="h5" component="h6">Description:</Typography> 
                        <Grid item xs>
                            <TextareaAutosize aria-label="minimum height" name="description" rows={3} rowsMax={5} style={{width: '35em'}} onChange={this.handleChange}/>
                        </Grid>
                        <br/>
                        <Typography variant="h5" component="h6">Type of content:</Typography> 
                        <Grid item xs>
                        <NativeSelect style={{width: '20em'}}
                            id="demo-customized-select-native"
                            name='typeOfContent'
                            onChange={this.handleChange}
                            >
                            <option value="" />
                            <option value={"Educational"}>Eductional</option>
                            <option value={"Inspirational"}>Inspirational</option>
                            <option value={"Promotional"}>Promotional</option>
                            </NativeSelect>                    
                        </Grid>
                        <br/>
                        <Typography variant="h5" component="h6">Add a link to an article here:</Typography> 
                        <Grid item xs>
                        <TextField style={{width: '20em'}}
                            id="outlined-basic"
                            name="link"
                            label="Article Link"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                        </Grid>
                        <br/>
                        <Typography variant="h5" component="h6">Press below to add appropriate files:</Typography> 
                        <Grid>
                            <div>
                                <Button onClick={this.handleOpen.bind(this)}>
                                Add Files and Images
                                </Button>
                                <DropzoneDialog
                                    open={this.state.open}
                                    onSave={this.handleSave.bind(this)}
                                    acceptedFiles={['image/*', 'application/*', 'video/*']}
                                    showPreviews={true}
                                    dropzoneText={"Drag and drop your files here or click"}
                                    maxFileSize={5000000}
                                    onClose={this.handleClose.bind(this)}
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} spacing={4} alignItems="flex-start" direction="column" justify="flex-start" style={{margin: '1em 5em'}}>
                        <Grid item xs>
                            <Typography variant="h2" component="h3">Preview</Typography>
                            <Typography component="p">It will fill as you go!</Typography>
                        </Grid>
                        <Grid item xs>
                            <Card style={{maxWidth: '50em'}}>
                                <CardHeader
                                    avatar={
                                    <Avatar aria-label="recipe" style={{backgroundColor: 'orange'}}>
                                        {name}
                                    </Avatar>
                                    }
                                    action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                    }
                                    title={this.state.title}
                                    subheader={month + '/' + date + '/' + year}
                                />
                                <CardMedia
                                    style={{height: 0, paddingTop: '56.25%'}}
                                    image= "https://picsum.photos/500/700"
                                    title="Images go here"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    {this.state.description}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    <Link href={this.state.link} onClick={this.preventDefault}>
                                        {this.state.link}
                                    </Link>
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                <ShareIcon />
                                </IconButton>
                            </CardActions>
                            </Card>
                        </Grid>
                        <br />
                        <Button
                        color="primary"
                        variant="contained"
                        onClick={this.handleSubmit}
                        >Post Now</Button>
                    </Grid>
                </Grid>
              </div>
          );
      }
}

export default MentorCreationPage;