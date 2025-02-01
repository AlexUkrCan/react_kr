import {useEffect} from "react";
import {loadAuthUsers, refresh} from "../services/api-login.service.ts";


const UsersPage = () => {
    useEffect(() => {
        //створюємо функцію яка повинна підвантажувати нам продукти
        loadAuthUsers().then(value =>
        {console.log(value)}).catch(error => {console.log(error)})
        // виконуємо процес рефрешу

        refresh()
            .then(() =>loadAuthUsers())
            .then(value =>console.log(value))


    },[])
    return (
        <div>
           Users page
        </div>
    );
};

export default UsersPage;