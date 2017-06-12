import React, { Component } from "react";
import Board from "./Board";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>EtherSketch Home</h1>
        <Board />
      </div>
    );
  }
}

export default Home;
