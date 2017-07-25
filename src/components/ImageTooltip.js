import React, { Component } from "react";
import { Layer, Label, Tag, Text } from "react-konva";

class ImageTooltip extends Component {
  componentDidMount() {
    // setting this through react-konva will not allow the label to dimension
    // itself properly
    this.refs.text.padding(5);
  }

  render() {
    const { x, y, children } = this.props;
    const offset = 10;
    return (
      <Layer x={x + offset} y={y + offset}>
        <Label x={0} y={0}>
          <Tag fill="#feffcd" cornerRadius="2" />
          <Text ref="text" fill="#07c" fontSize="12" text={children} />
        </Label>
      </Layer>
    );
  }
}

export default ImageTooltip;
