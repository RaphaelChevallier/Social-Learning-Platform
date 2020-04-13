import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const MyButton = styled(Button)({
//   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  

  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});
const titleStyle = ({
    fontFamily: "Arial",
    // background: 'linear-gradient(90deg, rgba(255,165,73,1) 0%, rgba(50,146,233,1) 53%, rgba(111,215,236,1) 100%)',
 
     fontWeight: "300",
    // webkkitTextFillColor:"transparent",
    //  webkitBackgroundClip: "text",
    // border: 0,
    // borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    textAlign: "center",
    // marginTop: "5rem",
    color: "black",
    fontSize :"6rem",
   
  });
  const subtitle= ({
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // border: 0,
    // borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    textAlign: "center",
 
    fontSize :"2rem",
   
  });
  const paragraph= ({
    
    textAlign: "center",
    fontSize: "1.1rem",
    fontWeight: "200",
    marginRight:"6rem",
    marginLeft:"6rem",
    marginTop:"6rem",
    
   
  });




export default function StyledComponents() {
  return(
  //<MyButton>Styled Components</MyButton>
  <div>
      <h1 style = {titleStyle}>Giddy-Up</h1>
      <h2 style = {subtitle}>Fast-Track your way into a new career!</h2>
      <section>
      <p style = {paragraph}>Giddy-Up is a startup project dedicated to creating tools and connections that will provide all the resources you need to get up and running in a new career, whether you have experience with your goals or not.</p>
      </section>


     

  </div>
    
    
    
    
    
    
    );
}