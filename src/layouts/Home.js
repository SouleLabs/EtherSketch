import React, { Component } from "react";
import Board from "./Board";
import Header from "./Header";
import ToolBox from "./ToolBox";
import TagLine from "../components/TagLine";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header>
          <ToolBox />
        </Header>
        <Board />
        <TagLine title="Immortal Blockchain Pixels">
          Tagline about how EtherSketch works.
        </TagLine>
      </div>
    );
  }
}

export default Home;
