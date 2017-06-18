import React, { Component } from "react";
import IconLink from "../components/IconLink";

class ViewPanel extends Component {
  render() {
    return (
      <div className="ViewPanel">
        <IconLink name="pencil" to="/home/edit" />
      </div>
    );
  }
}

export default ViewPanel;
