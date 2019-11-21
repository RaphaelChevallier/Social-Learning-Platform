import React, { Component } from 'react';


export class Success extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <div>
        <h1>Thank You For Your Submission</h1>
      </div>
    );
  };
}

const container = {
    margin: '150px',
    border: '5px orange'
};

export default Success;
