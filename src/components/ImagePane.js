import React, { Component } from "react";
import ImagePaneDefault from "./ImagePaneDefault.png";
import "./ImagePane.css";

class ImagePane extends Component {
  render() {
    return (
      <div className="ImagePane" onClick={handleClick}>
        <img alt="EtherSketch" src={ImagePaneDefault} />;{" "}
      </div>
    );
  }
  handleClick() {
    
  }

}

export default ImagePane;
