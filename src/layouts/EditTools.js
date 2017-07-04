import React, { Component } from "react";
import ButtonLink from "../components/ButtonLink";
import Label from "../components/Label";

class EditTools extends Component {
  render() {
    const pickLabel = "Choose Color";
    const saveLabel = "Save Pixels";
    const costLabel = "Cost: 0.004 ETH";
    return (
      <div>
        <Label>
          {costLabel}
        </Label>
        <ButtonLink icon="paint-brush" to="/home/color">
          {pickLabel}
        </ButtonLink>
        <ButtonLink default to="/home/view">
          {saveLabel}
        </ButtonLink>
      </div>
    );
  }
}

export default EditTools;
