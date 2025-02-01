import {useEffect, useState} from "react";
import {IUsers} from "../../models/users/IUsers.ts";
import UserComponent from "./UserComponent.tsx";
import {getUsers} from "../../services/users/api.users-service.ts";
import {IUsersObjects} from "../../models/users/IUsersObject.ts";


const UsersComponent = () => {

    const [users, setUsers] = useState<IUsers[]>([]);

    useEffect(() => {
        getUsers()
            .then(({users}:IUsersObjects) => setUsers(users));
    },[])

    return (
        <div>
            {
                users.map(user =><UserComponent key={user.id} item={user} />)
            }

        </div>
    );
};

export default UsersComponent;