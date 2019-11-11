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
  evaluate = invokingOperation => {
    let result = eval(
      this.state.initialNumber +
        this.state.operation +
        this.state.secondaryNumber
    );
    this.setState({
      display: result,
      initialNumber: result,
      secondaryNumber: "",
      operation: ""
    });
  };
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
  onOperationInput = operation => {
    if (operation === "C") {
      this.setState({
        display: 0,
        initialNumber: "",
        secondaryNumber: "",
        operation: ""
      });
    } else if (operation === "=" || this.secondaryNumber) {
      this.evaluate(operation);
    } else {
      this.setState({
        operation: operation
      });
    }
  };
  render() {
    return (
      <div className="wrapper">
        <Display display={this.state.display} />
        <Operation operation="C" onOperationInput={this.onOperationInput} />
        <Number number="7" onNumberInput={this.onNumberInput} />
        <Number number="8" onNumberInput={this.onNumberInput} />
        <Number number="9" onNumberInput={this.onNumberInput} />
        <Operation operation="/" onOperationInput={this.onOperationInput} />
        <Number number="4" onNumberInput={this.onNumberInput} />
        <Number number="5" onNumberInput={this.onNumberInput} />
        <Number number="6" onNumberInput={this.onNumberInput} />
        <Operation operation="*" onOperationInput={this.onOperationInput} />
        <Number number="1" onNumberInput={this.onNumberInput} />
        <Number number="2" onNumberInput={this.onNumberInput} />
        <Number number="3" onNumberInput={this.onNumberInput} />
        <Operation operation="-" onOperationInput={this.onOperationInput} />
        <Number number="0" onNumberInput={this.onNumberInput} />
        <Number number="." onNumberInput={this.onNumberInput} />
        <Operation operation="=" onOperationInput={this.onOperationInput} />
        <Operation operation="+" onOperationInput={this.onOperationInput} />
      </div>
    );
  }
}

export default Calculator;
