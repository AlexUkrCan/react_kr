import {useEffect, useState} from "react";
import {IUsers} from "../../models/users/IUsers.ts";
import UserComponent from "./UserComponent.tsx";
import {loadAuthUsers} from "../../services/api-login.service.ts";


const UsersComponent = () => {

    const [users, setUsers] = useState<IUsers[]>([]);

    useEffect(() => {

        loadAuthUsers().then(users =>
        {setUsers(users)}).catch(error => {console.log(error)})

    },[]);



    return (
        <div>
            {
                users.map(user =><UserComponent key={user.id} user={user}/>)
            }

        </div>
    );
};

export default UsersComponent;