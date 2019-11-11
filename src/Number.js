import React from "react";

class Number extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.number
    };
  }
  onNumberInput = () => {
    this.props.onNumberInput(this.state.number);
  };
  render() {
    return (
      <div>
        <button className="number" onClick={this.onNumberInput}>
          {this.state.number}
        </button>
      </div>
    );
  }
}

export default Number;
