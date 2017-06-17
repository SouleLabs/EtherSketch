import React, { Component } from "react";
import ButtonLink from "../components/ButtonLink";

class EditPanel extends Component {
  render() {
    return (
      <div className="EditPanel">
        <input type="text" placeHolder="link" />
        <input type="text" placeHolder="text" />
        <ButtonLink to="/app/view">Save Pixels</ButtonLink>
      </div>
    );
  }
}

export default EditPanel;
