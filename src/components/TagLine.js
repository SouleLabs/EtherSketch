import React, { Component } from "react";
import "./TagLine.css";

class TagLine extends Component {
  render() {
    return (
      <div className="TagLine">
        <h1>{this.props.title}</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default TagLine;
