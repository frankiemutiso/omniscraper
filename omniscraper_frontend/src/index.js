import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import "./index.css";

const history = createBrowserHistory();

history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

ReactGA.initialize("UA-190601275-1");

render(
  <BrowserRouter history={history}>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
