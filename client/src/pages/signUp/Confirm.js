import React, { Component } from 'react'


import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {MuiThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Autocomplete from "@material-ui/lab/Autocomplete";
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
export class Confirm extends Component {
    render() {
        return (
            <MuiThemeProvider >
            <React.Fragment>
          <div style = {container}>

          </div>
          </React.Fragment>
          </MuiThemeProvider >
        )
    }
}
const container = {
    margin: '150px',
    border: '5px orange'

};
export default Confirm

