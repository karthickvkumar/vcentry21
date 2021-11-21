import React, { Component } from "react";

class ContactPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login_data: {
        email_id: "",
        password: "",
      },
      error: {
        email_id: false,
        password: false,
      },
      isPasswordVisible: false,
      show: true,
      showIfElse: true
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value, event.target.name)
    this.setState({
      login_data: { ...this.state.login_data, [event.target.name]: event.target.value }
      // [event.target.name] : event.target.value
    });
  }

  onSubmitLogin() {
    var error = {
      email_id: false,
      password: false,
    }
    for (var key in this.state.login_data) {
      error[key] = this.state.login_data[key] == "" ? true : false    
    }

    this.setState({
      error : {...error}
    })
  }

  showAndHide() {
    this.setState({
      show: !this.state.show
    })
  }

  showHideIfElse() {
    this.setState({
      showIfElse: !this.state.showIfElse
    })
  }

  isPasswordVisible() {
    this.setState({
      isPasswordVisible: !this.state.isPasswordVisible
    })
  }

  render() {
    var username = "Karthick Kumar";

    return (
      <div>
        <h1>This is a Contact Page</h1>
        <div className="m-bottom-8">
          <label className="label">Enter your Email ID :</label>
          <input className="input" type="text" placeholder="Please enter your email id.." onChange={this.onInputChange} name="email_id" />

          {this.state.error.email_id && <span className="error-msg">Please enter a valid Email ID</span>}
        </div>
        <div className="m-bottom-8 icon-align">
          <label className="label">Enter your Password :</label>
          <input className="input" type={this.state.isPasswordVisible ? "text" : "password"} placeholder="Please enter your password.." onChange={this.onInputChange} name="password" />
          {this.state.isPasswordVisible ?
            <img src={require("../images/open-eye.jpg").default} className="w-25" onClick={() => this.isPasswordVisible()} />
            :
            <img src={require("../images/close-eye.png").default} className="w-25" onClick={() => this.isPasswordVisible()} />
          }

          {this.state.error.password && <span className="error-msg">Please enter a valid Email ID</span>}

        </div>
        <div>
          <button onClick={() => this.onSubmitLogin()}>Login</button>
        </div>
        <div>
          <h1>The entered email id is : {this.state.email_id}</h1>
          <h1>The entered password is : {this.state.password}</h1>
          <h1>{username}</h1>

          <button onClick={() => this.showAndHide()}>Show and Hide Content</button>
          {this.state.show && <h1>This is based on conditional Rendering</h1>}
        </div>

        <div>
          <button onClick={() => this.showHideIfElse()}>Show and Hide If-Else</button>
          {
            this.state.showIfElse ?
              <div>
                <h1>Successfully Authenticated</h1>
                <img src={require("../images/shinchu.jpg").default} style={{ width: "400px" }} />
              </div>
              :
              <div>
                <h1>Sorry! Faild to Authenticate</h1>
                <img src={"http://prod-upp-image-read.ft.com/a4e8f394-313b-11ea-a329-0bcf87a328f2"} style={{ width: "400px" }} />
              </div>
          }
        </div>

      </div>
    )
  }
}

export default ContactPage;