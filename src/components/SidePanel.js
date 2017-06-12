import React, { Component } from "react";
import ButtonLink from "./ButtonLink";
import "./SidePanel.css";

class SidePanel extends Component {
  render() {
    return (
      <div className="SidePanel">
        <h3>Side Panel</h3>
        <ButtonLink to="/edit">Set Pixels</ButtonLink>
      </div>
    );
  }
}

export default SidePanel;
