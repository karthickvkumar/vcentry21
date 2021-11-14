import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class LoginPage extends Component{

  render(){
    return(
      <div>
        <h1>This is a Login Page</h1>
        <NavLink to="/">Go Back</NavLink>
      </div>
    )
  }
}

export default LoginPage;