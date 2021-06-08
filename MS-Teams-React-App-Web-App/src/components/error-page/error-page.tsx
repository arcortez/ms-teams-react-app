import React from "react";
import { RouteComponentProps } from "react-router-dom";

import "./error-page.css";

const ErrorPage: React.FunctionComponent<RouteComponentProps> = (props) => {
  const unauthorizedErrorMessage =
    "Sorry, an error occurred while trying to access this service.";
  const forbiddenErrorMessage =
    "Sorry, you do not have permission to access this page. Please contact your administrator to be granted permission.";
  const generalErrorMessage =
    "Ooops! An unexpected error seems to have occured. Why not try refreshing your page? Or you can contact your administrator if the problem persists.";

  function parseErrorMessage(): string {
    const params: any = props.match.params;
    if ("id" in params) {
      const id = params["id"];
      if (id === "401") {
        return `${unauthorizedErrorMessage}`;
      } else if (id === "403") {
        return `${forbiddenErrorMessage}`;
      }
    }
    return generalErrorMessage;
  }

  return <div className="error-message">{parseErrorMessage()}</div>;
};

export default ErrorPage;
