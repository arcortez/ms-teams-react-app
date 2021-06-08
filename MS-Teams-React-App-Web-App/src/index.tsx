import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import * as microsoftTeams from "@microsoft/teams-js";
initializeIcons();

// -------------------------------------------------------------- //
// INITIAL RETRIEVAL OF TEAMS CONTEXT                             //
// -------------------------------------------------------------- //

microsoftTeams.initialize();
microsoftTeams.getContext((context: microsoftTeams.Context) => {
  localStorage.removeItem("TEAMS_CONTEXT");
  localStorage.setItem("TEAMS_CONTEXT", JSON.stringify(context));

  // ADD HERE: additional local storage loading of data
});


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
