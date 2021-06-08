import axios from '../shared/configurations/axios-jwt-decorator';
//import { getBaseUrl } from '../shared/configVariables';
import * as microsoftTeams from "@microsoft/teams-js";

let baseAxiosUrl = "https://teams-web-api.azurewebsites.net/api";
//getBaseUrl() + '/api';

export const getSentNotifications = async (): Promise<any> => {
    let botIdQueryParam = await getBotIdQueryParam();
    let url = baseAxiosUrl + "/sentnotifications?" + botIdQueryParam;
    return await axios.get(url);
}

export const getDraftNotifications = async (): Promise<any> => {
    let botIdQueryParam = await getBotIdQueryParam();
    let url = baseAxiosUrl + "/draftnotifications?" + botIdQueryParam;
    return await axios.get(url);
}

export const verifyGroupAccess = async (): Promise<any> => {
    let botIdQueryParam = await getBotIdQueryParam();
    let url = baseAxiosUrl + "/groupdata/verifyaccess?" + botIdQueryParam;
    return await axios.get(url, false);
}

export const getGroups = async (id: number): Promise<any> => {
    let botIdQueryParam = await getBotIdQueryParam();
    let url = baseAxiosUrl + "/groupdata/" + id + "?" + botIdQueryParam;
    return await axios.get(url);
}

export const searchGroups = async (query: string): Promise<any> => {
    let botIdQueryParam = await getBotIdQueryParam();
    let url = baseAxiosUrl + "/groupdata/search/" + query + "?" + botIdQueryParam;;
    return await axios.get(url);
}

export const exportNotification = async (id: string): Promise<any> => {
    let botIdQueryParam = await getBotIdQueryParam();
    let url = baseAxiosUrl + "/exportnotification/" + id + "?" + botIdQueryParam;
    return await axios.post(url, null, false, {
        responseType: 'arraybuffer',
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    }).then(response => {
        const disposition = response.request.getResponseHeader('Content-Disposition')
        var fileName = "";
        var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        var matches = filenameRegex.exec(disposition);
        if (matches != null && matches[1]) {
            fileName = matches[1].replace(/['"]/g, '');
        }

        let new_blob = new Blob([response.data], { type: "application/zip" });
        const url = URL.createObjectURL(new_blob);        
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        console.log(response.headers);
        document.body.appendChild(link);
        link.click();
    });
}

export const getSentNotification = async (id: number): Promise<any> => {
    let botIdQueryParam = await getBotIdQueryParam();
    let url = baseAxiosUrl + "/sentnotifications/" + id + "?" + botIdQueryParam;;
    return await axios.get(url);
}

export const getDraftNotification = async (id: number): Promise<any> => {
    let botIdQueryParam = await getBotIdQueryParam();
    let url = baseAxiosUrl + "/draftnotifications/" + id + "?" + botIdQueryParam;
    return await axios.get(url);
}


export const deleteDraftNotification = async (id: number): Promise<any> => {
    let botIdQueryParam = await getBotIdQueryParam();
    let url = baseAxiosUrl + "/draftnotifications/delete/" + id + "?" + botIdQueryParam;
    return await axios.post(url);
}

export const duplicateDraftNotification = async (id: number): Promise<any> => {
    let botIdQueryParam = await getBotIdQueryParam();
    let url = baseAxiosUrl + "/draftnotifications/duplicates/" + id + "?" + botIdQueryParam;
    return await axios.post(url);
}

export const sendDraftNotification = async (payload: {}): Promise<any> => {
    let botIdQueryParam = await getBotIdQueryParam();
    let url = baseAxiosUrl + "/sentnotifications?" + botIdQueryParam;
    return await axios.post(url, payload);
}

export const updateDraftNotification = async (payload: {}): Promise<any> => {
    let botIdQueryParam = await getBotIdQueryParam();
    let url = baseAxiosUrl + "/draftnotifications/update?" + botIdQueryParam;
    return await axios.post(url, payload);
}

export const createDraftNotification = async (payload: {}): Promise<any> => {
    let botIdQueryParam = await getBotIdQueryParam();
    let url = baseAxiosUrl + "/draftnotifications?" + botIdQueryParam;
    return await axios.post(url, payload);
}

export const getTeams = async (): Promise<any> => {
    let botIdQueryParam = await getBotIdQueryParam();
    let url = baseAxiosUrl + "/teamdata?" + botIdQueryParam;
    console.log(botIdQueryParam);
    return await axios.get(url);
}

export const getConsentSummaries = async (id: number): Promise<any> => {
    let botIdQueryParam = await getBotIdQueryParam();
    let url = baseAxiosUrl + "/draftnotifications/consentSummaries/" + id + "?" + botIdQueryParam;
    return await axios.get(url);
}

export const sendPreview = async (payload: {}): Promise<any> => {
    let botIdQueryParam = await getBotIdQueryParam();
    let url = baseAxiosUrl + "/draftnotifications/previews?" + botIdQueryParam;
    return await axios.post(url, payload);
}

export const getAuthenticationConsentMetadata = async (windowLocationOriginDomain: string, login_hint: string): Promise<any> => {
    let url = `${baseAxiosUrl}/authenticationMetadata/consentUrl?windowLocationOriginDomain=${windowLocationOriginDomain}&loginhint=${login_hint}`;    
    return await axios.get(url, undefined, false);
}

export const getInfo = async (): Promise<any> => {
    let url = `https://tprod-resource-tracker-api.azurewebsites.net/info`;
    return await axios.get(url);
}

export const getBotIdQueryParam = async (): Promise<string> => {
    return new Promise((resolve) => {
        microsoftTeams.initialize();
        microsoftTeams.getContext((context) => {
            let botId = "";
            if (context.entityId) {
                localStorage.setItem('botId', context.entityId)
                botId = context.entityId;
            }
            else {
                let localBotId = localStorage.getItem('botId')
                if (localBotId)
                    botId = localBotId;
            }
            return resolve("botId=" + botId);
        });
    });
}