import React, { Component } from "react";
import { Stage, Layer, Image } from "react-konva";
import FontAwesome from "react-fontawesome";
import _ from "lodash";
import ImageTooltip from "./ImageTooltip";
import "./ImagePane.css";

class ImagePane extends Component {
  state = {
    scale: 1.0,
    pixel: null
  };

  componentDidMount() {
    this.props.onLoad();
  }

  createCanvas() {
    const { data, width, height } = this.props;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    const imageData = context.createImageData(width, height);
    _.forEach(data, pixel => {
      const index = pixel.y * width * 4 + pixel.x * 4;
      imageData.data[index + 0] = pixel.red;
      imageData.data[index + 1] = pixel.green;
      imageData.data[index + 2] = pixel.blue;
      imageData.data[index + 3] = 255;
    });
    context.putImageData(imageData, 0, 0);
    return canvas;
  }

  get mouseMoveHandler() {
    const debouncedUpdate = _.debounce(params => {
      const { data, width } = this.props;
      const { stage } = this.refs;
      const pos = stage.node.getPointerPosition();
      if (!_.isNil(pos)) {
        const offset = {
          x: stage.node.x(),
          y: stage.node.y()
        };
        const actual = {
          x: _.floor((pos.x - offset.x) / stage.node.scaleX()),
          y: _.floor((pos.y - offset.y) / stage.node.scaleY())
        };
        const pixel = data[actual.x * width + actual.y];
        this.setState({ pixel });
      }
    }, 250);
    return params => {
      this.setState({ pixel: null });
      return debouncedUpdate(params);
    };
  }

  /**
    Limits dragging of image so it doesn't go outside container bounds.

    The idea is not to let the image to get thrown too much to a corner,
    neither pulled that much to another.
  */
  get dragBound() {
    const { width, height } = this.props;
    return pos => {
      let { x, y } = pos;
      const { container } = this.refs;
      const { scale } = this.state;
      const easy = 0;
      const deltaX = container.offsetWidth - width * scale - easy;
      const deltaY = container.offsetHeight - height * scale - easy;
      if (x > easy) {
        x = easy;
      } else if (x < deltaX) {
        x = deltaX;
      }
      if (y > easy) {
        y = easy;
      } else if (y < deltaY) {
        y = deltaY;
      }
      return { x, y };
    };
  }

  get zoomInHandler() {
    return () => {
      this.setState({ scale: 2.0 });
    };
  }

  get zoomOutHandler() {
    return () => {
      this.setState({ scale: 1.0 });
    };
  }

  renderTooltip() {
    const { pixel } = this.state;
    if (!_.isNil(pixel)) {
      return <ImageTooltip x={pixel.x} y={pixel.y}>{pixel.text}</ImageTooltip>;
    }
  }

  render() {
    const { scale } = this.state;
    const { width, height } = this.props;
    const stageScale = { x: scale, y: scale };
    const canvas = this.createCanvas();
    const tooltip = this.renderTooltip();
    return (
      <div ref="container" className="ImagePane">
        <div className="ImagePane-Float">
          <div onClick={this.zoomInHandler}>
            <FontAwesome name="plus" />
          </div>
          <div onClick={this.zoomOutHandler}>
            <FontAwesome name="minus" />
          </div>
        </div>
        <Stage
          ref="stage"
          scale={stageScale}
          width={width}
          height={height}
          draggable
          dragBoundFunc={this.dragBound}
        >
          <Layer>
            <Image
              x={0}
              y={0}
              image={canvas}
              onMouseMove={this.mouseMoveHandler}
            />
          </Layer>
          {tooltip}
        </Stage>
      </div>
    );
  }
}

export default ImagePane;
