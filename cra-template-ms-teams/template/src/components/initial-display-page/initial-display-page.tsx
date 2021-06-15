import { useEffect, useState } from 'react';
import MemberInterface from "../../shared/interfaces/member.interface";
import "./initial-display-page.css";
import { 
    loadMsTeamsToLocalStorage, 
    StorageNames,
    getObjectFromLocalStorage
  } from "../../shared/helpers/local-storage-helper";
import { Persona, PersonaSize } from '@fluentui/react/lib/Persona';

const InitialDisplayPage = () => {
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ list, setList ] = useState<any[]>([]);

    useEffect(() => {
        getObjectFromLocalStorage(StorageNames.Context).then((context: microsoftTeams.Context) => {
            loadMsTeamsToLocalStorage(context.groupId ? context.groupId : "");
        });

        getObjectFromLocalStorage(StorageNames.MSTeamsMembers).then((members: MemberInterface[]) => {
            console.log(members);
            let tempList: any[] = [];
            members?.sort((x:MemberInterface,y:MemberInterface) => {
                return x.username > y.username ? 1 : -1;
            }).forEach((item:MemberInterface) => {
                tempList.push(
                    <div className="col member-item">
                        <Persona 
                            imageUrl={`data:image/png;base64,`+item.picture}
                            text={item.username}
                            size={PersonaSize.size56}
                            imageAlt={item.username}
                            secondaryText={item.email}
                        />
                    </div>
                );
            });
            setList(tempList);
        });

        setLoading(false);
    }, []);

    return loading ? <div>Loading</div> : 
    <div className="container main-container">
        <h5>Your Team Members</h5>
        <hr />
        {list}
        <hr />
    </div>;
}

export default InitialDisplayPage;