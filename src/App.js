import React, { Component } from 'react';
import './App.css';
import routes     from './utils/routes'
import Navigation from './Components/Navigation'

class App extends Component {

  render() {
    return (
      <div>
        <Navigation />
        { routes }
      </div>
    );
  }
}

export default App;
