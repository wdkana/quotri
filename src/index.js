// file: src/index.jsx
import React from "react";
import ReactDOM from "react-dom";
import Quotes from "./quotes.js";
import Landing from "./landing.js";
import "./style/index.css";

const title = "Quotri";

ReactDOM.render(
  <div>
    {/* <Quotes title={title} /> */}
    <Landing/>
  </div>,
  document.getElementById("root")
);
