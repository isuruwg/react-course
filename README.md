# react-course <!-- omit in toc -->

My work from [React - The Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux) Udemy course is in this repo.

# TOC <!-- omit in toc -->
- [1. Getting Started](#1-getting-started)
  - [1.1. Creating a react app](#11-creating-a-react-app)
  - [1.2. Starting the app](#12-starting-the-app)
- [2. Next Generation JavaScript](#2-next-generation-javascript)
- [3. Base Features and Syntax](#3-base-features-and-syntax)
  - [3.1. Different files in the app](#31-different-files-in-the-app)
  - [3.2. JSX](#32-jsx)
  - [3.3. Create a new component](#33-create-a-new-component)
  - [3.4. Including dynamic content](#34-including-dynamic-content)
    - [3.4.1. Props](#341-props)
      - [3.4.1.1. props.children](#3411-propschildren)
    - [3.4.2. State](#342-state)
      - [3.4.2.1. Changing state](#3421-changing-state)
      - [3.4.2.2. Using useState() Hook for state manipulation](#3422-using-usestate-hook-for-state-manipulation)
  - [3.5. Event Handlers](#35-event-handlers)
    - [3.5.1. Two way binding](#351-two-way-binding)
  - [3.6. Adding Styling](#36-adding-styling)
    - [3.6.1. With Stylesheets](#361-with-stylesheets)
    - [3.6.2. With inline styles](#362-with-inline-styles)

# 1. Getting Started

## 1.1. Creating a react app

You can create a new app by doing,

```npx create-react-app my-app```

However, for the first app we'll use, 

```npx create-react-app my-first-app --scripts-version 1.1.5```

This will create the same app structure as used in the course.

## 1.2. Starting the app

```
cd my-first-app
yarn start
```

# 2. Next Generation JavaScript

# 3. Base Features and Syntax

Please create a new app by following the guidelines in the [Getting Started](#1-getting-started) section above.

## 3.1. Different files in the app

The [src/index.js](my-first-app/src/index.js) imports the App from src/App.js and renders it inside the `root` element defined in [public/index.html](my-first-app/public/index.html)

## 3.2. JSX

jsx allows us to write HTML like code inside javascript. However, there are some limitations, for example in the above div, when we want to specify a class for styling, we have to use `className` instead of `class` as we would have used in an html file.

For example the following two are equivalent and the first example uses JSX.

```javascript
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
      </div>
    );
  }
}
```

```javascript
class App extends Component {
  render() {
    return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a React App'));
  }
}
```
## 3.3. Create a new component

Let's create a new component, for this, we'll create a folder named [Person](my-first-app/src/Person)

```javascript
import React from 'react';

const person = () => {
    return <p>I'm a Person!</p>;
};

export default person;
```

Now let's import it in [App.js](my-first-app/src/App.js) and render it in our page:

```javascript
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person/>
      </div>      
    );
  }
}

export default App;
```

Please also refer to [../components.pdf](../resources/components.pdf)

## 3.4. Including dynamic content

You can include dynamic content by putting them inside `{}`

```javascript
const person = () => {
    return <p>I'm a Person! I am {Math.floor(Math.random()*30)} years old</p>;
};
```

### 3.4.1. Props

We can use props to get arguments from the calling function. (Note: Any name can be used here, does not have to be `props`)

```javascript
const person = (props) => {
    return <p>I'm {props.name}! I am {props.age} years old</p>;
};
```
We can pass these properties as: `<Person name="person1" age="30"/>`

We can also pass method references in the same way. You can see more details in the [event handlers](#method-ref-passing) section.

#### 3.4.1.1. props.children

`props.children` accesses anything passed as a child element.

```javascript
const person = (props) => {
    return (
        <div>
            <p>I'm {props.name}! I am {props.age} years old</p>
            <p>{props.children}</p>
        </div>        
    )
};
```

We can define children as: `<Person name="bla" age="40">My Hobbies: Racing</Person>`

### 3.4.2. State

`Component` class has a property named `state`. Any changes to `state` or `props` makes react re-render the DOM. 

example for defining and using `state`:

```javascript
class App extends Component {
  state = {
    persons: [
      {name: 'person1', age: 20},
      {name: 'bla', age: 30},
      {name: 'bla2', age: 40}
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}
```

Best practice note: Only use state in a few main components of your app. Don't use state everywhere as it would get difficult to manage state. 

#### 3.4.2.1. Changing state

`state` is a property of `Component` class and changing the `state` property should be done using `this.setState()` method.

```javascript
// DON'T DO THIS: this.state.persons[0].name = 'NEW name';
this.setState({
  persons: [
      {name: 'NEW name', age: 20},
      {name: 'bla', age: 30},
      {name: 'bla2', age: 40}
    ]
  })
```

This only updates the `persons` element in `state`. Any other elements that existed within state remain untouched.

Refer to [resources/state-learning-card.pdf](../resources/state-learning-card.pdf) for more details.

#### 3.4.2.2. Using useState() Hook for state manipulation

Hooks were introduced starting from React 16.8. If our application didn't use `class App extends Component` and instead defined `app` as a function in the code below, we wouldn't have access to `state` element. In this case we can use `useState` Hook as shown in the file below. 

An important difference between `useState()` and `Component.state` is how they are updated. `useState()` returns an array of two elements. The `state` and a method to `setState`. However, the `setState` method overwrites everything that was in `state`. Therefore when we require multiple elements in state, the best practice is to use `useState` multiple times to define different elements and update them individually as shown in the code snippet below with `otherState`.

Refer to [resources/usestate-learning-card.pdf](../resources/usestate-learning-card.pdf) for more details.

```javascript
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default app;
```


## 3.5. Event Handlers

In [src/App.js](my-first-app/src/App.js):

```javascript
<button onClick={this.switchNameHandler}>Switch Name</button>
```

```javascript
switchNameHandler = () => {
    this.setState({
      persons: [
          {name: 'NEW name', age: 20},
          {name: 'bla', age: 30},
          {name: 'bla2', age: 40}
      ]
    })
  }
```

A full list of supported events can be found [here](https://reactjs.org/docs/events.html#supported-events)

<a id="method-ref-passing"></a>You can pass method references between components. You can see this in action in [src/App.js](my-first-app/src/App.js) passing the `switchNameHandler` into `person` in [src/Person.js](my-first-app/src/Person/Person.js)

in `App.js`:

```javascript
<Person 
  name={this.state.persons[1].name} 
  age={this.state.persons[1].age}
  click={this.switchNameHandler}>My Hobbies: Racing</Person>
```

in `Person.js`

```javascript
const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name}! I am {props.age} years old</p>
            <p>{props.children}</p>
        </div>        
    )
};
```

If we want to pass parameters to the `switchNameHandler` function, there are two ways to do this:

1. `bind` can be used for passing parameters as follows:

    ```javascript
    switchNameHandler = (newName) => {
        this.setState({
          persons: [
              {name: newName, age: 20},
              {name: 'bla', age: 30},
              {name: 'bla2', age: 40}
          ]
        })
      }
    ```

    ```javascript
    <button onClick={this.switchNameHandler.bind(this, 'NEW name')}>Switch Name</button>
    ```

    We don't have to do the `bind` if we don't have any parameters to pass as the arrow functions handle the `this` property.

2. Using arrow functions: This is another way of doing this, however, this is not recommended as this can make the app slow because of react re-rendring our app.

    ```javascript
    <button onClick={() => this.switchNameHandler('NEW name')}>Switch Name</button>
    ```
### 3.5.1. Two way binding

[Assignment01](Assignments/assignment-01/README.md) shows an example of two way binding an input field.

In the assignment, the `UserInput` input field is bound to the value of the `state.username` while `state.username` is changed by changes to the `UserInput` input field using an `inputChangedHandler` change handler.

## 3.6. Adding Styling

### 3.6.1. With Stylesheets

Let's create a [Person/Person.css](my-first-app/src/Person/Person.css)

```css
.Person {
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
}
```

We would need to import the css in [Person/Person.js](my-first-app/src/Person/Person.js) as `import './Person.css'`. 

```javascript
import './Person.css'
.........
        <div className="Person">
........
        </div>        
........
```

React also handles automatic prefixes for the styles so that the app would work in multiple browsers:
eg: `box-shadow` and `webkit-box-shadow` are both present on our browser rendered page.

### 3.6.2. With inline styles

We'll do an inline style for our button in [src/App.js](my-first-app/src/App.js)

```javascript
.........
class App extends Component {
  .......

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        .........
        <button 
          style={style}
          onClick={() => this.switchNameHandler('NEW name')}>Switch Name</button>
       ...........
      </div>
    );
  }
}
......
```
