import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header>
          <h1>EtherSketch</h1>
          <p>Pixel Advertising with Ethereum</p>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default Header;
