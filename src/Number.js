import React from "react";

class Number extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.number
    };
  }
  render() {
    return (
      <div>
        <button className="number">{this.state.number}</button>
      </div>
    );
  }
}

export default Number;
