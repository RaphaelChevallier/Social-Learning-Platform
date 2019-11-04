import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



export class SignUpFirst extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    
    
    render() {
        
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title ="Enter User Details"/>
                    <TextField
                    hintText="Enter Your First Name"
                    floatingLabelText="First Name"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField
                    hintText="Enter Your Last Name"
                    floatingLabelText="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField
                    hintText="Enter Your Email"
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    />
                    <br/>
                    <RaisedButton
                    label = "Continue"
                    primary = {true}
                    style = {styles.button}
                    onClick = {this.continue}
                    />
                </React.Fragment>


            </MuiThemeProvider>
            // <div className="FormCenter">
            // <form onSubmit={this.handleSubmit} className="FormFields">
            //   <div className="FormField">
            //     <label className="FormField_Label" htmlFor="name">
            //       Full Name
            //     </label>
            //     <input
            //       type="text"
            //       id="name"
            //       className="FormField_Input"
            //       placeholder="Enter your full name"
            //       name="name"
            //       value={this.state.name} onChange={this.handleChange}
            //     />
            //   </div>
            //   <div className="FormField">
            //     <label className="FormField_Label" htmlFor="email">
            //       Email Address
            //     </label>
            //     <input
            //       type="email"
            //       id="email"
            //       className="FormField_Input"
            //       placeholder="Enter your email"
            //       name="email"
            //       value={this.state.email} onChange={this.handleChange}
            //     />
            //   </div>
            //   <div className="FormField">
            //     <label className="FormField_Label" htmlFor="password">
            //       Password
            //     </label>
            //     <input
            //       type="password"
            //       id="password"
            //       className="FormField_Input"
            //       placeholder="Enter your password"
            //       name="password"
            //       value={this.state.password} onChange={this.handleChange}
            //     />
            //   </div>
            //   <div className="FormField">
            //     <label className="FormField_Label" htmlFor="passVerify">
            //       Verify Password
            //     </label>
            //     <input
            //       type="password"
            //       id="passVerify"
            //       className="FormField_Input"
            //       placeholder="Re-enter your password"
            //       name="passVerify"
            //       value={this.state.passVerify} onChange={this.handleChange}
            //     />
            //   </div>
            //   <div className="FormField">
               
            //   </div>
            //   <div className="FormField">
            //   <label className="FormField_CheckboxLabel">
            //     <input
            //       className="FormField_Checkbox"
            //       type="checkbox"
            //       name="hasAgreed"
            //       value={this.state.hasAgreed} onChange={this.handleChange}
            //     />
            //     I agree all to all statements in
            //     <a href="" className="FormField_TermsLink">
            //       terms of service
            //     </a>
            //   </label>
            //   </div>
            //   <div className="FormField">
            //     <button className="FormField_Button mr-20">Continue</button>
            //     <Link to="/sign-in" className="FormField_Link">
            //        I'm already a member
            //     </Link>
            //   </div>
            
            // </form>
            // </div>
        );
        
    }
  
}
const styles = {
    button:{
        margin: 15
    }}

export default SignUpFirst;
