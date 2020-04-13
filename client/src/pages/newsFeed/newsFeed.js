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



class newsFeed extends Component {
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
      }

    preventDefault = event => event.preventDefault();

      render(){
        const name = this.state.firstNameLetter + this.state.lastNameLetter;
        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
          return(
              <div>
                    <Grid container spacing={3} direction="column" alignItems="center" justify="center">
                        <Grid item xs = {12} style={{width:'25%'}}>
                            <Card >
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
                        <Grid item xs = {12} style={{width:'25%'}}>
                            <Card>
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
                        <Grid item xs = {12} style={{width:'25%'}}>
                            <Card>
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
                        <Grid item xs = {12} style={{width:'25%'}}>
                            <Card>
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
                    </Grid>
              </div>
          );
      }
}

export default newsFeed;