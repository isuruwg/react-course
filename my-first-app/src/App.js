import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="person1" age="30"/>
        <Person name="bla" age="40">My Hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;
