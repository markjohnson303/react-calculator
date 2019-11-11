import React from "react";
import Display from "./Display.js";
import Number from "./Number.js";
import Operation from "./Operation.js";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>Calculator</p>
        <Display />
        <Number />
        <Operation />
      </div>
    );
  }
}

export default Calculator;
