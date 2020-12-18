# react-course <!-- omit in toc -->

My work from [React - The Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux) Udemy course is in this repo.

# TOC <!-- omit in toc -->
- [1. Getting Started](#1-getting-started)
  - [1.1. Creating a react app](#11-creating-a-react-app)
  - [1.2. Starting the app](#12-starting-the-app)
  - [1.3. Setting up a linter](#13-setting-up-a-linter)
- [2. Next Generation JavaScript](#2-next-generation-javascript)
- [3. Base Features and Syntax](#3-base-features-and-syntax)
  - [3.1. Different files in the app](#31-different-files-in-the-app)
  - [3.2. JSX](#32-jsx)
  - [3.3. Create a new component](#33-create-a-new-component)
    - [3.3.1. Including dynamic content](#331-including-dynamic-content)
    - [3.3.2. Props](#332-props)
      - [props.children](#propschildren)

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

## 1.3. Setting up a linter

We'll use [ESLint](https://eslint.org/) as a JavaScript Linter [[ref]](https://eslint.org/docs/user-guide/getting-started).

1. Add ESLint to your project by doing:

    ```bash
    yarn add eslint --dev
    # or
    # npm install eslint --save-dev
    ```
2. Init ESLint to set up a configuration file

    ```bash
    yarn run eslint --init
    # or
    # npx eslint --init
    ```
    For this project, I chose the following options:
    ```
    ✔ How would you like to use ESLint? · To check syntax, find problems, and enforce code style
    ✔ What type of modules does your project use? · JavaScript modules (import/export)
    ✔ Which framework does your project use? · react
    ✔ Does your project use TypeScript? · No
    ✔ Where does your code run? · node
    ✔ How would you like to define a style for your project? · guide
    ✔ Which style guide do you want to follow? · airbnb
    ✔ What format do you want your config file to be in? · JSON
    ```
3. Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for VSCode if you are using VSCode [[ref]](https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code).

**Note**: Temporarily removed ESLint because of issue: `Module build failed: Error: Cannot find module 'eslint/lib/formatters/stylish'`. References for fixing: [1](https://github.com/webpack-contrib/eslint-loader/issues/272), [2](https://github.com/webpack-contrib/eslint-loader/issues/271), [3](https://github.com/eslint/eslint/issues/11910), [4](https://github.com/facebook/create-react-app/issues/3617)

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

Please also refer to [../components.pdf](../components.pdf)

### 3.3.1. Including dynamic content

You can include dynamic content by putting them inside `{}`

```javascript
const person = () => {
    return <p>I'm a Person! I am {Math.floor(Math.random()*30)} years old</p>;
};
```

### 3.3.2. Props

We can use props to get arguments from the calling function. (Note: Any name can be used here, does not have to be `props`)

```javascript
const person = (props) => {
    return <p>I'm {props.name}! I am {props.age} years old</p>;
};
```
We can pass these properties as: `<Person name="person1" age="30"/>`

#### props.children

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