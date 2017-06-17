import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ButtonLink.css";

class ButtonLink extends Component {
  render() {
    return (
      <Link className="ButtonLink" to={this.props.to}>
        {this.props.children}
      </Link>
    );
  }
}

export default ButtonLink;
