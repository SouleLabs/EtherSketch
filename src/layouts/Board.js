import React, { Component } from "react";
import ImageContainer from "../containers/ImageContainer";
import "./Board.css";

class Board extends Component {
  render() {
    return (
      <div className="Board">
        <ImageContainer />
      </div>
    );
  }
}

export default Board;
