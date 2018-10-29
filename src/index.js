import React, { Component } from "react";
import { render } from "react-dom";
import DropDown from "./App";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  render() {
    return (
      <div className="col-md-6">
        <h3> Sample Form Container </h3>
        <DropDown />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
