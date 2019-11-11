import React from "react";

class Operation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operation: props.operation
    };
  }
  render() {
    return (
      <div>
        <button className="operation">{this.state.operation}</button>
      </div>
    );
  }
}

export default Operation;
