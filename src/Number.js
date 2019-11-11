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
        <p>Number</p>
      </div>
    );
  }
}

export default Number;
