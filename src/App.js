import React, { Component } from 'react';
import './App.css';
import routes     from './utils/routes'
import Navigation from './components/Navigation'

class App extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <div className="content">
          { routes }
        </div>
      </div>
    );
  }
}

export default App;
