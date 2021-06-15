# Development Setup

#### Application Details
This file is for the configuration tab. The installer/manifest will need this to anchor your web app to Microsoft Teams.

- Update the following in __src\shared\configurations\config.tsx__
    ```
    microsoftTeams.settings.setSettings({
        suggestedDisplayName: "<YOUR_APP_NAME_HERE>",
        entityId: "<YOUR_APP_NAME_HERE>",
        contentUrl: baseUrl + "/",
        websiteUrl: baseUrl + "/",
      });
    ```
- Update the following in __src\components\homepage\homepage.tsx__
    ``` 
    if (msEntityId === "<YOUR_APP_NAME_HERE>" || msEntityId === undefined) 
    ```
- Update the following in __src\shared\configurations\constants.js__
    ```
    const prod = {
        url: {
            API_URL: 'https://<INSERT YOUR APPLICATION API URL HERE>'
        }
    }
    ```
- *(Optional)*:Update __public\index.html__
    1. meta name
    2. title
    3. icon
