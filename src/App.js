import React, { Component } from "react";
import "./App.css";
import Menu from './Menu';

class App extends Component {

  componentDidMount() {
    console.log(">>>Inside of Component Did Mount>>");
    
  }

  componentWillUnmount() {
console.log(">>>inside of component Will Mount>>>");
  }
  render() {
    return (
      <div className="App">
        <Menu />
      </div>
    );
  }
}

export default (App);

