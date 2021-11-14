import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class HomePage extends Component{

  render(){
    return(
      <div>
        <h1>This is a Home Page</h1>
        <NavLink to="/login">Go To Login Page</NavLink>
        <br></br>
        <NavLink to="/contact-us">Go To Contact US</NavLink>
        <br></br>
        <NavLink to="/about">Go To About Page</NavLink>
      </div>
    )
  }
}

export default HomePage;