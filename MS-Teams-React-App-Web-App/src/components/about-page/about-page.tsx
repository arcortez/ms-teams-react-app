import { useEffect, useState } from 'react';
import "./about-page.css";

const AboutPage = () => {
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ showQR, setQR] = useState<string>("hide-item");

    const switchShow = () => {
        if(showQR === "show-item") {
            setQR("hide-item");
        }
        else {
            setQR("show-item");
        }
    }

    useEffect(() => {
        setLoading(false);
    }, []);

    return loading ? <div>Loading</div> : 
    <div className="container main-container">
        <h5>Prerequisites:</h5>
        <ol>
            <li>Microsoft Teams Application</li>
            <li>
                Your own  <a href="https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/prepare-your-o365-tenant">
                    Microsoft Teams Tenant
                </a> with a registered Microsft 365 
            </li>
            <li>Admin user access to the Microsoft Teams Tenant</li> 
            <li><a href="https://ngrok.com/">NgRok</a> Account for local debugging, or</li>
            <li>A Web App Service</li>
        </ol>
        <br />
        <h5>Local Debugging</h5>
        <ol>
            <li>Open the directory of this application <b>/MS-Teams-React-App-Web-App</b></li>
            <li>Open your CLI or Terminal in this directory.</li>
            <li>Run the following commands: 
                <pre>&gt; npm install</pre>
                <pre>&gt; npm start</pre>
            </li>
        </ol>
        <h5>NgRok</h5>
        <ul>
            <li>What does ngRok do? It makes your localhost available to the internet and lets Teams see your localhost.</li>
            <li>Setting Up your ngRok:
                <ol>
                    <li>Open your ngRok .exe file and input the following commands in the opened terminal:
                        <pre>&gt; ngrok authtoken [your_auth_token]</pre>
                        <pre>&gt; ngrok http https://localhost:3000/ -host-header=localhost:3000</pre>
                    </li>
                    <li>Note down the ngrok URL provided by the command line app. (format: XXXX.ngrok.io)</li>
                </ol>
            </li>
        </ul>
        <h5>Hosting in your Local MS Teams App</h5>
        <ol>
            <li>Open the directory in this project <b>/MS-Teams-React-App-Manifest</b></li>
            <li>Open the <b>manifest.json</b> in a text editor and update the values.</li>
            <li>Generate your own unique GUID for the <b>id</b> attribute and replace the attribute with your GUID.</li>
            <li><b>&lt;app service domain&gt;</b> is the URL of your website or the URL provided by NgRok</li>
            <li><b>&lt;client id&gt;</b> is found in the overview page of your App Registration.</li>
            <li>Do not forget to include the icons for color.png and outline.png.</li>
            <li>Double check that the file name of the manifest is <b>“manifest.json”</b></li>
            <li>Compress the two icons plus the json file. <b>Three (3) files in total.</b></li>
            <li>Upon opening the zip, the three items must be in the immediate directory.</li>
            <br />
            <li>Open and log-in to <a href="https://teams.microsoft.com">Microsoft Teams</a> using your user for your own tenant</li>
            <li>Click “Apps” on the lower left side of the main navbar of Teams. </li>
            <li>In the apps screen, on the lower left-hand side, click “Upload a custom app” then “Upload for my org”.</li>
            <li>Select your Zip file on the popup window.</li>
            <li>The screen will automatically load your app after the upload. (<i>Note: If you do not see your app in the loading screen, you may need to navigate to the “Built for my org” apps option.</i>)</li>
            <li>Click on your application name. (not the ellipsis on the right side) and you will see a popup with a "Add to a team" button</li>
            <li>Select your Team Channel.</li>
            <li>A smaller popup will appear with the name of you app at the top. The Configuration page of your web app will appear. Please wait patiently for the /config contents to load in the center of the window and then click “Save”. </li>
            <li>Your app has now been added to the channel. (<i>Note: reloading your local application will update the app live.</i>)</li>
        </ol>
        <h5 id="contributors">Contributors</h5>
        <ul>
            <li>John Carlo Diocadiz</li>
            <li>Lucky Canlas</li>
            <li>Jonalyn Cajalne</li>
            <li>Bruce Alan Baynosa</li>
            <li>Llanz Adeo Fontanilla</li>
            <li>Adrienne Elise Cortez</li>
            <li>Norbert Ago</li>
            <li>Noel Samson</li>
        </ul>
        <hr />
        <h5>If you appreciated this template, you can <a href="#contributors" onClick={switchShow}>buy us a coffee.</a> ^_^</h5>
        <div className={showQR}> 
            <span>BPI Account:</span>
        </div>
        <div className={showQR}>
            <img src="qrcode.png" height="500px"/>
        </div>
        <hr />
        <p>-- end of page --</p>
        <br />
    </div>;
}

export default AboutPage;