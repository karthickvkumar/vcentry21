import React, { Component } from 'react';

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
    return (
      <div>
        <h1>This is a Draft Page</h1>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.onChangeMessage()}>Update Message</button>
      </div>
    );
  }
}

export default DraftPage;