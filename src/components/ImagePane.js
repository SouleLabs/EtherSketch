import React, { Component } from "react";
import { Stage, Layer, Image } from "react-konva";
import FontAwesome from "react-fontawesome";
import _ from "lodash";
import "./ImagePane.css";

class ImagePane extends Component {
  state = {
    images: [],
    scale: 1.0
  };

  constructor(props) {
    super(props);
    this.prepareImageBlocks(props.data);
  }

  componentDidMount() {
    this.props.onLoad();
  }

  componentWillReceiveProps(nextProps) {
    this.prepareImageBlocks(nextProps.data);
  }

  prepareImageBlocks(data) {
    if (_.isNil(data) || data.length === 0) {
      this.setState({ images: [] });
    } else {
      var remaining = data.length;
      var images = [];
      _.forEach(data, block => {
        if (_.isNil(block)) {
          images.push(null);
          remaining--;
        } else {
          const image = new window.Image();
          image.src = block;
          image.onload = () => {
            if (--remaining <= 0) {
              this.setState({ images });
            }
          };
          images.push(image);
        }
      });
    }
  }

  renderImages() {
    const { images } = this.state;
    const rendered = [];
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        const index = j * 100 + i;
        const image = images[index];
        if (!_.isNil(image)) {
          const x = i * 10;
          const y = j * 10;
          rendered.push(
            <Image key={index} x={x} y={y} image={images[index]} />
          );
        }
      }
    }
    return rendered;
  }

  /**
    Limits dragging of image so it doesn't go outside container bounds.

    The idea is not to let the image to get thrown too much to a corner,
    neither pulled that much to another.
  */
  get dragBound() {
    return pos => {
      let { x, y } = pos;
      const { container } = this.refs;
      const { scale } = this.state;
      const easy = 40;
      const deltaX = container.offsetWidth - 1000 * scale - easy;
      const deltaY = container.offsetHeight - 1000 * scale - easy;
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

  render() {
    const { scale } = this.state;
    const stageScale = { x: scale, y: scale };
    const images = this.renderImages();
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
          width={1000}
          height={1000}
          draggable
          dragBoundFunc={this.dragBound}
        >
          <Layer>{images}</Layer>
        </Stage>
      </div>
    );
  }
}

export default ImagePane;
