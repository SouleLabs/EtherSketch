import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import FontAwesome from "react-fontawesome";
import _ from "lodash";
import "./ButtonLink.css";

class ButtonLink extends Component {
  renderIcon() {
    const { icon } = this.props;
    if (!_.isNil(icon)) {
      return <FontAwesome name={icon} />;
    }
  }
  render() {
    const linkCls = classNames({
      Alt: this.props.alt,
      ButtonLink: true,
      Clean: this.props.clean,
      Default: this.props.default
    });
    return (
      <Link className={linkCls} to={this.props.to}>
        {this.renderIcon()}
        {this.props.children}
      </Link>
    );
  }
}

export default ButtonLink;
