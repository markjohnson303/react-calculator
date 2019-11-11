import React from "react";
import Display from "./Display.js";
import Number from "./Number.js";
import Operation from "./Operation.js";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      initialNumber: "",
      secondaryNumber: "",
      operation: ""
    };
  }
  onNumberInput = number => {
    console.log(number);
    if (!this.state.operation) {
      console.log("here");
      this.setState({
        initialNumber: this.state.initialNumber + number.toString(),
        display: this.state.initialNumber + number.toString()
      });
    } else {
      this.setState({
        secondaryNumber: this.state.secondaryNumber + number.toString(),
        display: this.state.secondaryNumber + number.toString()
      });
    }
  };
  render() {
    return (
      <div className="wrapper">
        <Display display={this.state.display} />
        <Operation operation="C" />
        <Number number="7" onNumberInput={this.onNumberInput} />
        <Number number="8" onNumberInput={this.onNumberInput} />
        <Number number="9" onNumberInput={this.onNumberInput} />
        <Operation operation="/" />
        <Number number="4" onNumberInput={this.onNumberInput} />
        <Number number="5" onNumberInput={this.onNumberInput} />
        <Number number="6" onNumberInput={this.onNumberInput} />
        <Operation operation="*" />
        <Number number="1" onNumberInput={this.onNumberInput} />
        <Number number="2" onNumberInput={this.onNumberInput} />
        <Number number="3" onNumberInput={this.onNumberInput} />
        <Operation operation="-" />
        <Number number="0" onNumberInput={this.onNumberInput} />
        <Number number="." onNumberInput={this.onNumberInput} />
        <Operation operation="=" />
        <Operation operation="+" />
      </div>
    );
  }
}

export default Calculator;
