import React, { Component } from "react";

class ImagePane extends Component {
  render() {
    const style = {
      backgroundColor: "teal",
      height: "500px",
      lineHeight: "200px",
      textAlign: "center",
      width: "500px"
    };
    return (
      <div style={style}>
        IMAGE GOES HERE
      </div>
    );
  }
}

export default ImagePane;
