import React, { Component } from "react";
import classNames from "classnames";
import "./Label.css";

class Label extends Component {
  render() {
    const divCls = classNames({
      Alt: this.props.alt,
      Label: true
    });
    return (
      <div className={divCls}>
        {this.props.children}
      </div>
    );
  }
}

export default Label;
