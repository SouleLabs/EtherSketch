import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="App">
        {this.props.children}
      </main>
    );
  }
}

export default App;
