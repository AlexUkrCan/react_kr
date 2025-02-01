import {useEffect} from "react";
import {loadAuthUsers} from "../services/api-login.service.ts";


const UsersPage = () => {
    useEffect(() => {
        //створюємо функцію яка повинна підвантажувати нам продукти
        loadAuthUsers().then(value =>
        {console.log(value)}).catch(error => {console.log(error)})
        // виконуємо процес рефрешу



    },[])
    return (
        <div>
           Users page
        </div>
    );
};

export default UsersPage;