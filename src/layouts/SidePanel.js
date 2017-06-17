import React, { Component } from "react";
import { Route } from "react-router-dom";
import EditPanel from "./EditPanel";
import ViewPanel from "./ViewPanel";
import "./SidePanel.css";

class SidePanel extends Component {
  render() {
    return (
      <div className="SidePanel">
        <h3>Side Panel</h3>
        <Route path="/app/edit" component={EditPanel} />
        <Route path="/app/view" component={ViewPanel} />
      </div>
    );
  }
}

export default SidePanel;
