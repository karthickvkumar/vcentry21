import React, { Component } from 'react';

class TrashPage extends Component {
  render() {
    return (
      <div>
        <h1>This ia a Trash Page</h1>
        <h1>{this.props.inputData}</h1>
      </div>
    );
  }
}

export default TrashPage;