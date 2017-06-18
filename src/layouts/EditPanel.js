import React, { Component } from "react";
import ButtonLink from "../components/ButtonLink";
import "./EditPanel.css";

class EditPanel extends Component {
  render() {
    return (
      <div className="EditPanel">
        <h3>Edit Your Pixels</h3>
        <input type="text" placeholder="color" />
        <input type="text" placeholder="link" />
        <input type="text" placeholder="text" />
        <ButtonLink to="/home/view">Save Pixels</ButtonLink>
      </div>
    );
  }
}

export default EditPanel;
