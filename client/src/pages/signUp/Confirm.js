import React, { Component } from 'react'
import {MuiThemeProvider} from '@material-ui/core/styles';

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

