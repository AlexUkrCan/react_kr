import {useEffect} from "react";
import {loadAuthRecipes} from "../services/api-login.service.ts";


const RecipesPage = () => {
    useEffect(() => {
        //створюємо функцію яка повинна підвантажувати нам продукти
        loadAuthRecipes().then(value =>
        {console.log(value)}).catch(error => {console.log(error)})
        // виконуємо процес рефрешу



    },[])
    return (
        <div>

        </div>
    );
};

export default RecipesPage;