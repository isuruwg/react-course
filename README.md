# react-course <!-- omit in toc -->

My work from [React - The Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux) Udemy course is in this repo.

# TOC <!-- omit in toc -->
- [1. Getting Started](#1-getting-started)
  - [1.1. Creating a react app](#11-creating-a-react-app)
  - [1.2. Starting the app](#12-starting-the-app)
- [2. Next Generation JavaScript](#2-next-generation-javascript)
- [3. Base Features and Syntax](#3-base-features-and-syntax)
  - [Different files in the app](#different-files-in-the-app)
  - [JSX](#jsx)

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

## Different files in the app

The [src/index.js](my-first-app/src/index.js) imports the App from src/App.js and renders it inside the `root` element defined in [public/index.html](my-first-app/public/index.html)

## JSX

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
