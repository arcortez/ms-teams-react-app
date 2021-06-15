import React from "react";
import { RouteComponentProps } from "react-router-dom";
import * as microsoftTeams from "@microsoft/teams-js";
import "./sign-in-page.css";

const SignInPage: React.FunctionComponent<RouteComponentProps> = (props) => {
  const errorMessage = "Please sign in to continue.";

  function onSignIn() {
    microsoftTeams.authentication.authenticate({
      url: window.location.origin + "/signin-simple-start",
      successCallback: () => {
        console.log("Login succeeded!");
        window.location.href = "/";
      },
      failureCallback: (reason) => {
        window.location.href = "/errorpage";
      },
    });
  }

  return (
    <div className="sign-in-content-container">
      <div>{errorMessage}</div>
      <div className="space"></div>
      <input
        type="button"
        value="Sign in"
        className="sign-in-button"
        onClick={onSignIn}
      />
    </div>
  );
};

export default SignInPage;
