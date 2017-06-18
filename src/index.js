import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
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
      <Switch>
        <Route exact path="/">
          <Redirect to="/home/view" />
        </Route>
        <Route exact path="/home">
          <Redirect to="/home/view" />
        </Route>
        <Route path="/">
          <App>
            <Route path="/home" component={Home} />
          </App>
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
