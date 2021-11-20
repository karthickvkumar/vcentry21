import React, { Component } from "react";

class ContactPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      email_id : "",
      password : "",
      show : true,
      showIfElse : true
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

  showAndHide(){
    this.setState({
      show : !this.state.show
    })
  }

  showHideIfElse(){
    this.setState({
      showIfElse : !this.state.showIfElse
    })
  }

  render(){
    var username = "Karthick Kumar"; 

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
          <h1>{username}</h1>

          <button onClick={() => this.showAndHide()}>Show and Hide Content</button>
          { this.state.show  && <h1>This is based on conditional Rendering</h1>}
        </div>

        <div>
          <button onClick={() => this.showHideIfElse()}>Show and Hide If-Else</button>
          {
            this.state.showIfElse ?
            <h1>Successfully Authenticated</h1>
            :
            <h1>Sorry! Faild to Authenticate</h1>
          }
        </div>
      </div>
    )
  }
}

export default ContactPage;