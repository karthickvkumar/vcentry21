import React, { Component } from 'react';

class TrashPage extends Component {

  onHandleInput = (event) => {
    console.log(event.target.value)
    this.props.inputFunction(event.target.value);
  }

  render() {
    return (
      <div>
        <h1>This ia a Trash Page</h1>
        <h1>{this.props.inputData}</h1>
        <div>
          <input type="text" className="input" onChange={this.onHandleInput}/>
        </div>
      </div>
    );
  }
}

export default TrashPage;