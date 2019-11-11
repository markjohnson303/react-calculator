import React from "react";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="display">{this.props.display}</div>;
  }
}

export default Display;
