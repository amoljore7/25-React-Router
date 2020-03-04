import React, { Component } from "react";
import "./App.css";

class App extends Component {

  componentDidMount() {
    console.log(">>>Inside of Component Did Mount>>");
    
  }

  componentWillUnmount() {
console.log(">>>inside of component Will Mount>>>");
  }
  render() {
    console.log(">>>Inside render>>")
    return (
      <div className="App">
        <h1>Hello App</h1>
      </div>
    );
  }
}


export default (App);
