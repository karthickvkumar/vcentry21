import React, { Component } from 'react';
import axios from 'axios';

class StarredPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      name : '',
      job : ''
    }
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onSubmit(){
   const url = "https://reqres.in/api/users";

   axios.post(url, this.state)
      .then((response) => {
        let serverData = response.data;
        console.log(serverData);
        alert("User profile has been created successfully");
      })
      .catch((error) => {
        console.log(error)
      })
  }

  onUpdate(){
    const url = "https://reqres.in/api/users/2";

    axios.put(url, this.state)
      .then((response) => {
        let serverData = response.data;
        console.log(serverData)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  onDelete(){
    const url = "https://reqres.in/api/users/2";

    axios.delete(url)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <h1>This is a Starred Page</h1>
        <div className="m-bottom-8">
          <label className="label">Enter your Name :</label>
          <input className="input" type="text" placeholder="Please enter your name .." onChange={this.onInputChange} name="name" />
        </div>
        <div className="m-bottom-8">
          <label className="label">Enter your Job :</label>
          <input className="input" type="text" placeholder="Please enter your job .." onChange={this.onInputChange} name="job" />
        </div>
        <div>
          <button onClick={() => this.onSubmit()}>Sumbit Profile (POST)</button>
          <button onClick={() => this.onUpdate()}>Update Profile (PUT)</button>
          <br></br>
          <button onClick={() => this.onDelete()}>Delete Record</button>
        </div>
      </div>
    );
  }
}

export default StarredPage;