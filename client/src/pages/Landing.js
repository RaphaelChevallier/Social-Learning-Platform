import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import logo from "../images/logo.jpg";
import picture1 from "../images/Findyourtribe2.jpg";
import picture2 from "../images/Findyourtribe.jpg";
import picture3 from "../images/GiddyUpPitch001b.gif";

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
    marginBottom: "2rem",
   
   
  });
  const paragraph= ({
    
    textAlign: "center",
    fontSize: "1.1rem",
    fontWeight: "200",
    marginRight:"6rem",
    marginLeft:"6rem",
    marginTop:"6rem",
    
   
  });
  const formatted= ({
    
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    float: "clear",
 height: "90vh",
 width: "100vw",
alignItems: "center",
justifyContent: "center",
    
   
    
   
  });

  const formatted2= ({
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
//  height: "60vh",
//  width: "100vw",
alignItems: "center",
justifyContent: "center",
    
   
    
   
  });





export default function StyledComponents() {
  return(
  //<MyButton>Styled Components</MyButton>
  <div>
    <div style = {formatted}> 
    <img src={logo} alt="logo" style={{ width: '40%', height: '20%' }} />
    
    </div>
       
    <h2 style = {subtitle}>Fast-Track your way into a new career!</h2>
      <div style = {formatted2}> 
    <img src={picture3 } alt="pitchpic" style={{ width: '40%', height: '30%' }} />
    </div>
      <section>
      <p style = {paragraph}>Giddy-Up is a startup project dedicated to creating tools and connections that will provide all the resources you need to get up and running in a new career. No matter your experiene level, our goal is to provide a platform for people of any skill level to improve and thrive as quick as possible.</p>
      <div style = {formatted2}> 
    <img src={picture1} alt="pitchpic" style={{ width: '40%', height: '30%' }} />
    </div>
      </section>
     
      <section> 
      <p style = {paragraph}>Even with the countless ways to connect with others available right now, we found there was still a lack of platforms that exist solely to ease and enhance the path to a newfound talent or skill that you can use to kickstart a new career. Giddy-Up is being created to facilitate and support those across the world that wish to learn whatever they wish to with other like-minded and capable individuals.</p>
      <div style = {formatted2}> 
    <img src={picture2} alt="pitchpic" style={{ width: '40%', height: '30%' }} />
    </div>
      </section>


     

  </div>
    
    
    
    
    
    
    );
}