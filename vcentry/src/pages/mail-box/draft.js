import React, { Component } from 'react';

import {connect} from "react-redux";

class DraftPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      message : "You are logged in successfully"
    };
    console.log("Triggered Constructor Method");
  }

  UNSAFE_componentWillMount(){
    console.log("Triggered Component Will Mount Method");
  }

  componentDidMount(){
    console.log("Triggered Component Did Mount Method");
  }

  onChangeMessage(){
    this.setState({
      message : "Authentication Failed"
    })
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("Triggered Should Component Update Method");
    console.log(nextState)
    return true;
  }

  UNSAFE_componentWillUpdate(){
    console.log("Triggered Component Will Update Method");
  }
  
  componentDidUpdate(){
    console.log("Triggered Component Did Update Method");
  }

  componentWillUnmount(){
    console.log("Triggered Component Will Unmount Method");
  }

  render() {
    console.log("Triggered Render Method");
    console.log(this.props.userList)
    let users = this.props.userList.map((value, index) => {
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

    return (
      <div>
        <h1>This is a Draft Page</h1>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.onChangeMessage()}>Update Message</button>
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
    );
  }
}

function mapStateToProps(state){
  return {
    userList : state.userReducer.userList
  }
}

function mapDispatchToProps(dispatch){
  return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(DraftPage);