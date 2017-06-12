import React, { Component } from "react";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="App">
        {this.props.children}
        <Footer />
      </main>
    );
  }
}

export default App;
