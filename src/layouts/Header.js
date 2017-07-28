import React, { Component } from "react";
import MediaQuery from "react-responsive";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Wrapper">
          <header>
            <h1>EtherSketch</h1>
            <p>Pixel Advertising with Ethereum</p>
          </header>
          <MediaQuery query="(min-device-width: 1224px)">
            {this.props.children}
          </MediaQuery>
        </div>
      </div>
    );
  }
}

export default Header;
