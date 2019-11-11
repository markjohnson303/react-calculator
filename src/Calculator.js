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
      <div className="wrapper">
        <Display />
        <Operation operation="C" />
        <Number number="7" />
        <Number number="8" />
        <Number number="9" />
        <Operation operation="/" />
        <Number number="4" />
        <Number number="5" />
        <Number number="6" />
        <Operation operation="*" />
        <Number number="1" />
        <Number number="2" />
        <Number number="3" />
        <Operation operation="-" />
        <Number number="0" />
        <Number number="." />
        <Operation operation="=" />
        <Operation operation="+" />
      </div>
    );
  }
}

export default Calculator;
