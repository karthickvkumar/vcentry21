import React, { Component } from 'react';

class DraftPage extends Component {

  constructor(props){
    super(props);
    this.state = {

    };
    console.log("Triggered Constructor Method");
  }

  UNSAFE_componentWillMount(){
    console.log("Triggered Component Will Mount Method");
  }

  componentDidMount(){
    console.log("Triggered Component Did Mount Method");
  }


  render() {
    console.log("Triggered Render Method");
    return (
      <div>
        <h1>This is a Draft Page</h1>
      </div>
    );
  }
}

export default DraftPage;