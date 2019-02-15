import React, { Component } from 'react';
import './App.css';
import User from './components/user/index';

class App extends Component {

  render() {
    return (
      <div className="App container">
        <User />
      </div>
    );
  }
}

export default App;
