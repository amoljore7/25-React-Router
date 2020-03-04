import React, { Component } from "react";
import "./App.css";

import Menu from './Menu';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
class App extends Component {

  componentDidMount() {
    console.log(">>>Inside of Component Did Mount>>");
    
  }

  componentWillUnmount() {
console.log(">>>inside of component Will Mount>>>");
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Menu />
            <switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
            </switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default (App);

