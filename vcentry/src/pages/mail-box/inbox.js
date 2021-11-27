import React, { Component } from 'react';
import axios from 'axios';

class InboxPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userList: []
    }
  }

  loadAPI() {
    const url = "https://reqres.in/api/users?page=2";

    axios.get(url)
      .then((response) => {
        let serverData = response.data;
        this.setState({
          userList: serverData.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    let users = this.state.userList.map((value, index) => {
      return (
        <tr key={index}>
          <td>{value.id}</td>
          <td>{value.first_name}</td>
          <td>{value.last_name}</td>
          <td>{value.email}</td>
          <td>
            <img src={value.avatar} className="dp-image" />
          </td>
        </tr>
      )
    });

    return (
      <div>
        <h1>This is a Inbox Page</h1>
        <button onClick={() => this.loadAPI()}>Load User Data API</button>
        <table id="customers">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Picture</th>
          </tr>
          {users}

        </table>
      </div>
    );
  }
}

export default InboxPage;