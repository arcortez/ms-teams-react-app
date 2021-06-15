import axios from "../shared/configurations/axios-jwt-decorator";
import * as microsoftTeams from "@microsoft/teams-js";
import { getObjectFromLocalStorage, StorageNames } from "../shared/helpers/local-storage-helper";

let baseAxiosUrl = process.env.REACT_APP_BASE_URL;

export const getMsTeamsMembers = async (groupId: string): Promise<any> => {
  try{
  let url = baseAxiosUrl + "/api/v1/User/GetAllUsersUpdatedDetails?groupid=" + groupId;
  console.log(url);
  var ins = await axios.get(url);
  console.log(ins)
  console.log("ins");
  return ins;
  }
  catch(e){
    console.log(e);
  }
};
