import React, { Component } from "react";
import { Link } from "react-router";

// Styles
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
          <Link to="/" className="pure-menu-heading pure-menu-link">
            EtherSketch
          </Link>
        </nav>

        {this.props.children}
      </div>
    );
  }
}

export default App;
