import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./ButtonLink.css";

class ButtonLink extends Component {
  render() {
    const linkCls = classNames({
      ButtonLink: true,
      Clean: this.props.clean,
      Default: this.props.default
    });
    return (
      <Link className={linkCls} to={this.props.to}>
        {this.props.children}
      </Link>
    );
  }
}

export default ButtonLink;
