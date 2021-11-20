import React, { Component } from "react";

class ContactPage extends Component{

  render(){
    return(
      <div>
        <h1>This is a Contact Page</h1>
        <div className="m-bottom-8"> 
          <label className="label">Enter your Email ID :</label>
          <input className="input" type="text" placeholder="Please enter your email id.."/>
        </div>
        <div className="m-bottom-8">
          <label className="label">Enter your Password :</label>
          <input className="input" type="password" placeholder="Please enter your password.." />
        </div>
        <div>
          <button>Login</button>
        </div>
      </div>
    )
  }
}

export default ContactPage;