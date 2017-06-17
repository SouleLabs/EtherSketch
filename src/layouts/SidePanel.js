import React, { Component } from "react";
import { Route } from "react-router-dom";
import EditPanel from "./EditPanel";
import ViewPanel from "./ViewPanel";
import "./SidePanel.css";

class SidePanel extends Component {
  render() {
    return (
      <div className="SidePanel">
        <Route path="/home/edit" component={EditPanel} />
        <Route path="/home/view" component={ViewPanel} />
      </div>
    );
  }
}

export default SidePanel;
