import React, { Component } from "react";
import ButtonLink from "../components/ButtonLink";

class ViewTools extends Component {
  render() {
    const helpLabel = "What's this?";
    const editLabel = "Edit Pixels";
    return (
      <div>
        <ButtonLink clean icon="paint-brush" to="/home/help">
          {helpLabel}
        </ButtonLink>
        <ButtonLink icon="paint-brush" to="/home/edit">
          {editLabel}
        </ButtonLink>
      </div>
    );
  }
}

export default ViewTools;
