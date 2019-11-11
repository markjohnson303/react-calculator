import React from "react";

class Operation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operation: props.operation
    };
  }
  onOperationInput = () => {
    this.props.onOperationInput(this.state.operation);
  };
  render() {
    return (
      <div>
        <button className="operation" onClick={this.onOperationInput}>
          {this.state.operation}
        </button>
      </div>
    );
  }
}

export default Operation;
