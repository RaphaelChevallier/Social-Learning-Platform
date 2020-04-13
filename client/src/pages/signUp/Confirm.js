import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';



const Confirm = ({
  values,
  prevStep,
  nextStep,
  handleSubmit
}) => {
  console.log(JSON.stringify(values.interests));
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <div style = {empty}>

        </div>
        <div style={container}>
          <FormLabel style = {containForm}>
           
            <label>FirstName: {values.firstName} </label>
            <br />
            <label>LastName: {values.lastName} </label>
            <br />
            <label>Email: {values.email} </label> <br />
            <label>Password: {values.password} </label> <br />
            <label>City: {values.city} </label> <br />
            <label>Birthdate: {values.birthdate} </label> <br />
            <label>Summary: {values.summary} </label> <br />
            <label>Interests: {JSON.stringify(values.interests)} </label> <br />
            <label>Mentor Subject: {values.mentorSubject} </label> <br />
            <label>Years Experience: {values.yearsExp} </label> <br />
            <label>Experience Level: {values.expLevel} </label> <br />
          </FormLabel>
          </div>
          <Button color="primary" style = {buttonStyle} variant="contained" onClick={this.previous}>
                Go Back</Button>
          <div style = {endButton}>
          <Button
            color="primary"
            variant="contained"
            style={buttonStyle}
            onClick={function(event){ prevStep()}}
          >
            Go Back
          </Button>
          <Button
            color="primary"
            variant="contained"
            style={buttonStyle}
            onClick={function(event){ handleSubmit(); nextStep()}}
          >
            Confirm
          </Button>
          </div>
      </React.Fragment>
    </MuiThemeProvider>
  );
};
const container = {
  
  display: "flex",
  textAlign: "center",
  alignItemes: "center",
  justifyContent: "center" ,
  color: "yellow",
  margin: "300px, 200px",
  backgroundColor: "#fff7e6",
};
const endButton = {
  margin: "100px",
  display: "flex",
  alignItemes: "center",
  justifyContent: "center" 

}
const containForm = {
  marginLeft: "auto",
  marginRight: "auto",
  border: "5px orange"
};
const empty = {
  margin: "200px"
};
const buttonStyle = {
  padding: "0px, 32px",
  alignItemes: "center",
  justifyContent: "center",
  
  border: "5px orange",
 
};
export default Confirm;
