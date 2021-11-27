import React, { Component } from 'react';
import axios from 'axios';

class InboxPage extends Component {

  loadAPI(){
    var url = "https://reqres.in/api/users?page=2";

    axios.get(url)
      .then((response) => {
        var serverData = response.data;
        console.log(serverData)
      })
      .catch((error) => {
        console.log(error)
      }) 
  }

  render() {
    return (
      <div>
        <h1>This is a Inbox Page</h1>
        <button onClick={() => this.loadAPI()}>Load User Data API</button>
      </div>
    );
  }
}

export default InboxPage;