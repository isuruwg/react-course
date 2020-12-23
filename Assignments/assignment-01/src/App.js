import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: "bla2"
  }
  inputChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  render() {    
    return (
      <div className="App">
        <h1>Assignment 01</h1>
        <UserInput 
          changed={this.inputChangedHandler} 
          username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput/>
      </div>
    );
  }
}

export default App;
