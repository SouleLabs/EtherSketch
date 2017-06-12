import React, { Component } from "react";
import ImageContainer from "../containers/ImageContainer";
import ButtonLink from "../components/ButtonLink";

class Home extends Component {
  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>EtherSketch Home</h1>
            <ImageContainer />
            <ButtonLink to="/edit">Set Pixels</ButtonLink>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
