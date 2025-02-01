import {useEffect} from "react";
import {loadAuthUsers} from "../services/api-login.service.ts";
import UsersComponent from "../components/users/UsersComponent.tsx";


const UsersPage = () => {
    useEffect(() => {
        //створюємо функцію яка повинна підвантажувати нам продукти
        loadAuthUsers().then(value =>
        {console.log(value)}).catch(error => {console.log(error)})
        // виконуємо процес рефрешу



    },[])
    return (
        <div>

            <UsersComponent/>
        </div>
    );
};

export default UsersPage;