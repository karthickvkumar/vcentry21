import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import SweetAlert from 'sweetalert-react';

import "../../node_modules/sweetalert/dist/sweetalert.css";

class LoginPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      show : false,
      message : "Hello, This is a Login Page !!!"
    };
  }

  displayAlert(){
    alert("Welcome to Login Page");
  }

  render(){
    return(
      <div>
        <button onClick={() => this.displayAlert()}>Click to show alert</button>
        <button onClick={() => this.setState({ show: true })}>Alert</button>
        <SweetAlert
          show={this.state.show}
          title="Demo"
          text="SweetAlert in React"
          onConfirm={() => this.setState({ show: false })}
        />
        <h1>This is a Login Page</h1>

        <h1>{this.state.message}</h1>

        <NavLink to="/">Go Back</NavLink>
      </div>
    )
  }
}

export default LoginPage;