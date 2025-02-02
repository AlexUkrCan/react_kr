import {useEffect, useState} from "react";
import {IUsers} from "../../models/users/IUsers.ts";
import UserComponent from "./UserComponent.tsx";
import {loadAuthUsers} from "../../services/api-login.service.ts";


const UsersComponent = () => {

    const [users, setUsers] = useState<IUsers[]>([]);

    useEffect(() => {
        //створюємо функцію яка повинна підвантажувати нам продукти
        loadAuthUsers().then(users =>
        {setUsers(users)}).catch(error => {console.log(error)})
        // виконуємо процес рефрешу



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