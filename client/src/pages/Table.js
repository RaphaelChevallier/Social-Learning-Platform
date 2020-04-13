import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import jwt_decode from 'jwt-decode';
import axios from 'axios';
export default class Table extends React.Component {
 
    constructor(props){
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
    }
    
    getKeys = function(){
        var keys =  Object.keys(this.props.data[0]);
        var index = keys.indexOf("user_id");
        if (index > -1) {
            keys.splice(index, 1);
        }
        index = keys.indexOf("mentor_id");
        if (index > -1) {
            keys.splice(index, 1);
        }
        return keys
    }

    followUser(user_id_toFollow, firstName, lastName){
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        var user = decoded.user_id
        var data = [user_id_toFollow, firstName, lastName, user]
        console.log("Pressing follow" + user_id_toFollow)
        axios
      .post('/Search/followUser', data)
      .then(res => {
        console.log("Done with db")

      } 
        )
      .catch(err => {
        console.error(err);
      });
    }
    
    getHeader = function(){
        var keys = this.getKeys();
        return keys.map((key, index)=>{
        return <th key={key}>{key.toUpperCase()}</th>
        })
    }
    
    getRowsData = function(){
        var items = this.props.data;
        var keys = this.getKeys();
        return items.map((row, index)=>{
        return <tr key={index}><RenderRow key={index} data={row} keys={keys}/><td><Button
        color="primary"
        variant="contained"
        onClick={() => this.followUser(items[index].user_id, items[index].firstname, items[index].lastname)}
        >Follow</Button></td></tr>
        })
    }
    
    render() {
    return (
    <div>
    <table>
    <thead>
    <tr>{this.getHeader()}</tr>
    </thead>
    <tbody>
    {this.getRowsData()}
    </tbody>
    </table>
    </div>
    );
    }
   }
   
   const RenderRow = (props) =>{
        return props.keys.map((key, index)=>{
        return <td key={props.data[key]}>{props.data[key]}</td> 
        })
   }