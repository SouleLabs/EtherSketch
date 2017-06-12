import React, { Component } from "react";
import ImagePaneDefault from "./ImagePaneDefault.png";
import "./ImagePane.css";

class ImagePane extends Component {
  render() {
    return (
      <div className="ImagePane">
        <img alt="EtherSketch" src={ImagePaneDefault} />;{" "}
      </div>
    );
  }
}

export default ImagePane;
