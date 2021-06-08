import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../../shared/styles/custom.css";
import "font-awesome/css/font-awesome.min.css";
import "./homepage.css";

import { Route, Switch, Redirect } from "react-router-dom";

import TabConfig from "../../shared/configurations/config";
import SignInPage from "../sign-in-page/sign-in-page";
import SignInSimpleEnd from "../sign-in-page/sign-in-simple-end";
import SignInSimpleStart from "../sign-in-page/sign-in-simple-start";
import ErrorPage from "../error-page/error-page";
import InitialDisplayPage from "../initial-display-page/initial-display-page";

interface IHomepageState {
  context?: microsoftTeams.Context
}

class Homepage extends React.Component<{}, any> {
  state: IHomepageState;

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  ComponentDidMount = () => {
    var stringContext = localStorage.getItem("TEAMS_CONTEXT");
    var msContext:microsoftTeams.Context = stringContext ? JSON.parse(stringContext) : null;

    this.setState({
      context: msContext
    });
    console.log(this.state);
  }

  public NoFound() {
    return <Redirect to="/404" />;
  }

  render() {
    let msEntityId = this.state?.context?.entityId;

    if (msEntityId === "<YOUR_APP_NAME_HERE>" || msEntityId === undefined) {
      return (
        <div>
          <main>
            <div className="navigation">
              
              <h3>MS Teams React App</h3>
            </div>
            <Switch>
              {
                // Navigation Pages
              }
              <Route exact path="/home" component={InitialDisplayPage} />

              {
                // Sign-in pages and error pages
              }
              <Route path="/signin" component={SignInPage} />
              <Route exact path="/signin-simple-start" component={SignInSimpleStart} />
              <Route exact path="/signin-simple-end" component={SignInSimpleEnd} />
              <Route exact path="/errorpage" component={ErrorPage} />
              <Route exact path="/errorpage/:id" component={ErrorPage} />
            </Switch>
          </main>
        </div>
      );
    } else {
      return ( 
        <>
          {
            //On Config
          }
          <Switch>
            <Route exact path="/" component={InitialDisplayPage} />
            <Route path="/config" component={TabConfig} />
          </Switch>
        </>
      );
    }
  }
}

export default Homepage;
