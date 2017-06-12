import React, { Component } from "react";
import ImageContainer from "../containers/ImageContainer";
import SidePanel from "../components/SidePanel";
import "./Board.css";

class Board extends Component {
  render() {
    return (
      <div className="Board">
        <ImageContainer />
        <SidePanel />
      </div>
    );
  }
}

export default Board;
