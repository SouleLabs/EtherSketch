import React, { Component } from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import "./IconLink.css";

class ButtonLink extends Component {
  render() {
    return (
      <Link className="IconLink" to={this.props.to}>
        <FontAwesome name={this.props.name} />
      </Link>
    );
  }
}

export default ButtonLink;
