import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import './App.css';

class App extends Component {

  render () {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

export default App;