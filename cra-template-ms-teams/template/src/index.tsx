import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import { initializeIcons } from "@fluentui/font-icons-mdl2";

initializeIcons();
// -------------------------------------------------------------- //
// RENDER OF COMPONENTS COMMAND                                   //
// -------------------------------------------------------------- //

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
