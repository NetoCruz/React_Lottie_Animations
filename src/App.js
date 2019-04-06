import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UncontrolledLottie from "./component/UncontrolledLottie";
import ControlledLottie from "./component/ControlledLottie";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UncontrolledLottie />
        <ControlledLottie />
      </div>
    );
  }
}

export default App;
