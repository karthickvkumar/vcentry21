import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as userAction from "../redux/action/user-action";

class AboutPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      register_form : {
        first_name : '',
        last_name : '',
        email_id : "",
        passowrd : '',
        gender : '',
        data_of_birth : "",
        languages : [],
        address : '',
        city : ''
      },
      userList : []
    }
  }

  onInputChange = (event) => {
    if(event.target.name === "languages"){
      if(event.target.checked){
        this.state.register_form.languages.push(event.target.value);
      }
      else{
        var index = this.state.register_form.languages.findIndex((value) => {
          return value === event.target.value
        });
        this.state.register_form.languages.splice(index, 1);
      }
      this.setState({
        register_form : {...this.state.register_form, languages : this.state.register_form.languages}
      })
    }
    else{
      this.setState({
        register_form : {...this.state.register_form , [event.target.name] : event.target.value}
      })
    }
  }

  onUserCreate(){
    this.props.action.addUser(this.state.register_form);
    this.state.userList.push(this.state.register_form);
    this.setState({
      userList : this.state.userList
    })
  }

  render(){

    let users = this.state.userList.map((value, index) => {
      return(
        <tr key={index}>
          <td>{value.first_name} {value.last_name}</td>
          <td>{value.email_id}</td>
          <td>{value.gender}</td>
          <td>{value.data_of_birth}</td>
          <td>{value.address}</td>
          <td>{value.city}</td>
        </tr>
      )
    })

    return(
      <div>
        <h1>This is a About Page</h1>
        <div className="m-bottom-8">
          <label className="label">Enter your First Name :</label>
         <input className="input" type="text" placeholder="Please enter your first name" name="first_name" onChange={this.onInputChange}/>
        </div>
        <div className="m-bottom-8">
          <label className="label">Enter your Last Name :</label>
          <input className="input" type="text" placeholder="Please enter your last name" name="last_name" onChange={this.onInputChange}/>
        </div>
        <div className="m-bottom-8">
          <label className="label">Enter your Email ID :</label>
          <input className="input" type="text" placeholder="Please enter your email id" name="email_id" onChange={this.onInputChange}/>
        </div>
        <div className="m-bottom-8">
          <label className="label">Enter your Password :</label>
          <input className="input" type="password" placeholder="Please enter your password" name="passowrd" onChange={this.onInputChange}/>
        </div>
        <div className="m-bottom-8">
          <label className="label">Select you Gender :</label>
          <input type="radio" name="gender" value="male" onChange={this.onInputChange}/>Male
          <input type="radio" name="gender" value="female" onChange={this.onInputChange}/>Female
          <input type="radio" name="gender" value="others" onChange={this.onInputChange}/>Others
        </div>
        <div className="m-bottom-8">
          <label className="label">Select you DOB :</label>
          <input type="date" className="input" name="data_of_birth" onChange={this.onInputChange}/>
        </div>
        <div className="m-bottom-8">
          <label className="label">Select you known Languages :</label>
          <input type="checkbox" name="languages" value="Tamil" onChange={this.onInputChange}/>Tamil
          <input type="checkbox" name="languages" value="English" onChange={this.onInputChange}/>English
          <input type="checkbox" name="languages" value="Telugu" onChange={this.onInputChange}/>Telugu
          <input type="checkbox" name="languages" value="Hindi" onChange={this.onInputChange}/>Hindi
          <input type="checkbox" name="languages" value="French" onChange={this.onInputChange}/>French
          <input type="checkbox" name="languages" value="German" onChange={this.onInputChange}/>German
        </div>
        <div className="m-bottom-8">
          <label className="label">Enter your Address :</label>
          <textarea className="input" placeholder="Please enter your address" name="address" onChange={this.onInputChange}></textarea>
        </div>
        <div className="m-bottom-8">
          <label className="label">Select your City :</label>
          <select className="input" name="city" onChange={this.onInputChange}>
            <option>Pleaes select any one city</option>
            <option>Chennai</option>
            <option>Madurai</option>
            <option>Trichy</option>
            <option>Erode</option>
            <option>Cochin</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Banglore</option>
          </select>
        </div>
        <div className="m-bottom-8">
          <button onClick={() => this.onUserCreate()}>Create User</button>
        </div>
        <NavLink to="/mail/draft">Go to Draft Page</NavLink>
        <div>
          <table id="customers">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email ID</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Address</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {users}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {}
}

function mapDispatchToProps(dispatch){
  return{
    action : bindActionCreators(userAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);