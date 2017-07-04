import React, { Component } from "react";
import "./Label.css";

class Label extends Component {
  render() {
    return (
      <div className="Label">
        {this.props.children}
      </div>
    );
  }
}

export default Label;
