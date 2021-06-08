import axios from "../shared/configurations/axios-jwt-decorator";

let baseURL = process.env.REACT_APP_BASE_URL;

export const sampleRequestPost = async (payload: {}): Promise<any> => {
    let url = baseURL + "/api/v1/PostRequest";
    return await axios.post(url, payload);
};

export const sampleRequestGet = async (id: number): Promise<any> => {
    let url = baseURL + "/api/v1/GetRequest/" + id;
    return await axios.get(url);
};