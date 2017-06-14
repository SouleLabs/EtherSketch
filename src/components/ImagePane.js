import React, { Component } from "react";
import { Stage, Layer, Image } from "react-konva";
import _ from "lodash";
import "./ImagePane.css";

const url = "http://www.milliondollarhomepage.com/index_files/image-map.png";

class ImagePane extends Component {
  state = {
    image: null
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

    The idea is not to show any blank space without need. The background can
    still be seen if image and container have some peculiar size combination.
  */
  get dragBound() {
    return pos => {
      let { x, y } = pos;
      const { container, image } = this.refs;
      const deltaX = container.offsetWidth - image.width();
      const deltaY = container.offsetHeight - image.height();
      if (x > 0) {
        x = 0;
      } else if (x < deltaX) {
        x = deltaX;
      }
      if (y > 0) {
        y = 0;
      } else if (y < deltaY) {
        y = deltaY;
      }
      return { x, y };
    };
  }

  render() {
    return (
      <div ref="container" className="ImagePane">
        <Stage width={1000} height={1000}>
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
}

export default ImagePane;
