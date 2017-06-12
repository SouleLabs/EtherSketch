import React, { Component } from "react";
import ImageContainer from "../containers/ImageContainer";
import ButtonLink from "../components/ButtonLink";
import "./Board.css";

class Board extends Component {
  render() {
    return (
      <div className="Board">
        <ImageContainer />
        <ButtonLink to="/edit">Set Pixels</ButtonLink>
      </div>
    );
  }
}

export default Board;
