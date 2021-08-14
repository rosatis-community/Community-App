import * as React from "react";
import { render } from "react-dom";
import './assets/scss/index.scss';
import App from "./containers/App";

const rootEl = document.getElementById("root");

render(<App />, rootEl);
