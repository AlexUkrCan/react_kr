import {useEffect, useState} from "react";
import {IRecipes} from "../../models/recipes/IRecipes.ts";
import RecipeComponent from "./RecipeComponent.tsx";
import {loadAuthRecipes} from "../../services/api-login.service.ts";


const RecipesComponent = () => {
    const [recipes, setRecipes] = useState<IRecipes[]>([]);

    useEffect(() => {
        //створюємо функцію яка повинна підвантажувати нам продукти
        loadAuthRecipes().then(recipes =>
        {setRecipes(recipes)}).catch(error => {console.log(error)})

    },[]);

    return (
        <div>
            {
                recipes.map(recipe =><RecipeComponent key={recipe.id} item={recipe} />)
            }

        </div>
    );
};

export default RecipesComponent;