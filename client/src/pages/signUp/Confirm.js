import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

const Confirm = ({
  values,
  nextStep,
  handleSubmit
}) => {
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <div style={container}>
          <FormLabel>
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

          <Button
            color="primary"
            variant="contained"
            style={buttonStyle}
            onClick={handleSubmit}
          >
            Confirm
          </Button>
        </div>
      </React.Fragment>
    </MuiThemeProvider>
  );
};
const container = {
  margin: "150px",
  border: "5px orange"
};
const buttonStyle = {
  padding: "0 32 px",
  margin: "0 64px",
  border: "5px orange"
};
export default Confirm;
