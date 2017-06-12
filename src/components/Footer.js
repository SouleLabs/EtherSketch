import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <p>
          An
          {" "}
          <a href="https://www.ethereum.org/">Ethereum</a>
          {" "}
          experiment by
          {" "}
          <a href="https://github.com/SouleLabs/EtherSketch">SouleLabs</a>
          .
        </p>
      </footer>
    );
  }
}

export default Footer;
