import React, { Component } from "react";
import { Route } from "react-router-dom";
import EditTools from "./EditTools";
import ViewTools from "./ViewTools";
import "./ToolBox.css";

class ToolBox extends Component {
  render() {
    return (
      <div className="ToolBox">
        <Route path="/home/edit" component={EditTools} />
        <Route path="/home/view" component={ViewTools} />
      </div>
    );
  }
}

export default ToolBox;
