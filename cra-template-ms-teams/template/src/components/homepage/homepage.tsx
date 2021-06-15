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
import AboutPage from "../about-page/about-page";

import * as microsoftTeams from "@microsoft/teams-js";
import { 
  loadMsTeamsToLocalStorage, 
  addObjectToLocalStorage,
  StorageNames,
  getObjectFromLocalStorage
} from "../../shared/helpers/local-storage-helper";

interface IHomepageState {
  context?: microsoftTeams.Context
}

class Homepage extends React.Component<{}, any> {
  state: IHomepageState;

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  page(page: string) {
    window.location.href = "/" + page;
  }

  public NoFound() {
    return <Redirect to="/404" />;
  }

  componentDidMount() {
    microsoftTeams.initialize();
    microsoftTeams.getContext((context: microsoftTeams.Context) => {
      addObjectToLocalStorage(context, StorageNames.Context);  
      
      // TO ADD: 
      // additional files for initial retrieval to local storage or variables
    });
  }

  render() {
    let msEntityId = this.state?.context?.entityId;
    if (msEntityId === "MS Teams React App" || msEntityId === undefined) {
      return (
        <div>
          <main>
            <div className="navigation">
              <img src="favicon.ico" height="40"/>
              <h5 className="title nav-link"><a onClick={() => this.page("home")}> MS Teams React App</a></h5>
              <span className="nav-link"><a onClick={() =>this.page("home")}> Home</a></span>
              <span className="nav-link"><a onClick={() =>this.page("about")}> About</a></span>
              
            </div>
            <Switch>
              {
                // Navigation Pages
              }
              <Route exact path="/home" component={InitialDisplayPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/" component={InitialDisplayPage} />
              <Route path="/config" component={TabConfig} />

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
            <Route exact path="/config" component={TabConfig} />
            <Route exact path="/" component={InitialDisplayPage} />
          </Switch>
        </>
      );
    }
  }
}

export default Homepage;
