//This refers to the endpoint: AuthenticationMetaDataController
import axios from "../shared/configurations/axios-jwt-decorator";
let baseAxiosUrl = process.env.REACT_APP_BASE_URL;

export const getAuthenticationConsentMetadata = async (
  windowLocationOriginDomain: string,
  login_hint: string
): Promise<any> => {
  let url = `${baseAxiosUrl}/api/authenticationMetadata/consentUrl?windowLocationOriginDomain=${windowLocationOriginDomain}&loginhint=${login_hint}`;
  console.log(url)
  return await axios.get(url, undefined, false);
}; 
