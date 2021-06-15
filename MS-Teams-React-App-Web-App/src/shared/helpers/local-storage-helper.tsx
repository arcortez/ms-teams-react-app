import { getMsTeamsMembers } from "../../services/ms-teams-service";

/** Enumerable of all Storage names */
export const StorageNames = {
    MSTeamsMembers: "msTeamsMembersContext",
    Context: "context"
}

//** Add an object to your local storage */
export const addObjectToLocalStorage = (
    dataContext: any,
    localStorageName: string
  ) => {
    localStorage.setItem(localStorageName, JSON.stringify(dataContext));
  };

export const getObjectFromLocalStorage = async (
    localStorageName: string
  ): Promise<any> => {
    console.log(localStorageName)
    let dataContext: any = JSON.parse(
      localStorage.getItem(localStorageName) ?? ""
    );
    return dataContext;
  };

/** Load MsTeams Context to LocalStorage */
export const loadMsTeamsToLocalStorage = (groupId: string) => {
  console.log("/** Load MsTeams Context to LocalStorage */");
  getMsTeamsMembers(groupId).then((response) => {
    addObjectToLocalStorage(response.data.data, StorageNames.MSTeamsMembers);
  });
};
