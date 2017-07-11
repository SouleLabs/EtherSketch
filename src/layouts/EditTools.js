import React, { Component } from "react";
import ButtonLink from "../components/ButtonLink";
import Label from "../components/Label";

class EditTools extends Component {
  render() {
    const pickLabel = "Choose Color";
    const saveLabel = "Save";
    const costLabel = "Cost: 0.004 ETH";
    return (
      <div>
        <Label alt>
          {costLabel}
        </Label>
        <ButtonLink alt icon="paint-brush" to="/home/color">
          {pickLabel}
        </ButtonLink>
        <ButtonLink alt default to="/home/view">
          {saveLabel}
        </ButtonLink>
      </div>
    );
  }
}

export default EditTools;
