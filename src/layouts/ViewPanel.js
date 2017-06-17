import React, { Component } from "react";
import ButtonLink from "../components/ButtonLink";

class ViewPanel extends Component {
  render() {
    return (
      <div className="ViewPanel">
        <ButtonLink to="/app/edit">Set Pixels</ButtonLink>
      </div>
    );
  }
}

export default ViewPanel;
