import React, { Component } from 'react';

class Logout extends Component {
  componentDidMount = () => {
    localStorage.clear()
  }
  render() {
    return (
      <div>
        <h1>Log Out Successful</h1>
      </div>
    );
  }
}

export default Logout;