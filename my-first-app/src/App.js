import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'lksdaog', name: 'person1', age: 20},
      {id: 'dkajsog', name: 'bla', age: 30},
      {id: 'soeorug',name: 'bla2', age: 40}
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    /* findIndex runs through all the elements and returns the index of the
    first element in the array that satisfies the provided testing function. 
    Otherwise, it returns -1 */
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    /* we use the spread operator here so that we don't mutate the state.
    Another way to do this would be: 
    const person = Object.assign({}, this.state.persons[personIndex]); */
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>    
        {persons}    
      </div>
    );
  }
}

export default App;
