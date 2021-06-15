// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React from "react";
import * as microsoftTeams from "@microsoft/teams-js";
import "./config.css";

/**
 * The 'Config' component is used to display your group tabs
 * user configuration options.  Here you will allow the user to
 * make their choices and once they are done you will need to validate
 * their choices and communicate that to Teams to enable the save button.
 */
class TabConfig extends React.Component {
  render() {
    /**
     * When the user clicks "Save", save the url for your configured tab.
     * This allows for the addition of query string parameters based on
     * the settings selected by the user.
     */
    microsoftTeams.initialize();
    microsoftTeams.settings.registerOnSaveHandler((saveEvent) => {
      const baseUrl = `https://${window.location.hostname}:${window.location.port}`;
      microsoftTeams.settings.setSettings({
        suggestedDisplayName: "MS Teams React App",
        entityId: "MS Teams React App",
        contentUrl: baseUrl + "/home",
        websiteUrl: baseUrl + "/home",
      });
      saveEvent.notifySuccess();
    });

    /**
     * After verifying that the settings for your tab are correctly
     * filled in by the user you need to set the state of the dialog
     * to be valid.  This will enable the save button in the configuration
     * dialog.
     */
    microsoftTeams.settings.setValidityState(true);

    return (
      <div className="configuration">
        {
            // Some apps use this to ask for application permissions
            // and for the initial setup of the app to the tab
        }
        <h1>Application Configuration</h1>
        <p>
          The setup for this tab will be done for you automatically. 
        </p>
        <p>
          Please click "Save" to proceed.
        </p>
      </div>
    );
  }
}

export default TabConfig;
