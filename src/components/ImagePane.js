import React, { Component } from "react";
import { Stage, Layer, Image } from "react-konva";
import FontAwesome from "react-fontawesome";
import _ from "lodash";
import "./ImagePane.css";

const url = "http://www.milliondollarhomepage.com/index_files/image-map.png";

class ImagePane extends Component {
  state = {
    image: null,
    scale: 1.0
  };

  componentDidMount() {
    const image = new window.Image();
    image.src = url;
    image.onload = () => {
      this.setState({
        image: image
      });
    };
  }

  /**
    Limits dragging of image so it doesn't go outside container bounds.

    The idea is not to let the image to get thrown too much to a corner,
    neither pulled that much to another.
  */
  get dragBound() {
    return pos => {
      let { x, y } = pos;
      const { container, image } = this.refs;
      const { scale } = this.state;
      const easy = 40;
      const deltaX = container.offsetWidth - image.width() * scale - easy;
      const deltaY = container.offsetHeight - image.height() * scale - easy;
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
        <Stage ref="stage" scale={stageScale} width={1000} height={1000}>
          <Layer>
            <Image
              ref="image"
              draggable={true}
              image={this.state.image}
              dragBoundFunc={this.dragBound}
            />
          </Layer>
        </Stage>
      </div>
    );
  }
  handleClick() {

  }

}

export default ImagePane;
