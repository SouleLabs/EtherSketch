import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import getWeb3 from "./util/getWeb3";

// Layouts
import "./index.css";
import App from "./App";
import Home from "./layouts/Home";

// Redux Store
import store from "./store";

// Initialize web3 and set in Redux.
getWeb3
  .then(results => {
    console.log("Web3 initialized!");
  })
  .catch(() => {
    console.log("Error in web3 initialization.");
  });

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Route path="/" component={App}>
        <Route exact path="/" component={Home} />
      </Route>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
