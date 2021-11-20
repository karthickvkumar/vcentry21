import React, { Component } from "react";

class ContactPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      email_id : "",
      password : ""
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value, event.target.name)
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  onSubmitLogin(){
    console.log(this.state)
  }

  render(){
    return(
      <div>
        <h1>This is a Contact Page</h1>
        <div className="m-bottom-8"> 
          <label className="label">Enter your Email ID :</label>
          <input className="input" type="text" placeholder="Please enter your email id.." onChange={this.onInputChange} name="email_id"/>
        </div>
        <div className="m-bottom-8">
          <label className="label">Enter your Password :</label>
          <input className="input" type="password" placeholder="Please enter your password.." onChange={this.onInputChange} name="password"/>
        </div>
        <div>
          <button onClick={() => this.onSubmitLogin()}>Login</button>
        </div>
        <div>
          <h1>The entered email id is : {this.state.email_id}</h1>
          <h1>The entered password is : {this.state.password}</h1>
        </div>
      </div>
    )
  }
}

export default ContactPage;