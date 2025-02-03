
import {useEffect, useState} from "react";
import {IRecipes} from "../../models/recipes/IRecipes.ts";
import {loadAuthRecipes} from "../../services/login-service/api-login.service.ts";
import ShowDetailRecipeComponent from "../show-detail-recipe/ShowDetailRecipeComponent.tsx";

const ShowDetailsRecipeComponents = () => {


    const [recipes, setRecipes] = useState<IRecipes[]>();
    useEffect(() => {

        loadAuthRecipes().then(recipes =>
        {setRecipes(recipes)})

    }, []);
    return (
        <div>
            {

                recipes &&
                recipes.map((recipe:IRecipes)=><ShowDetailRecipeComponent key={recipe.id} recipe={recipe}/>)
            }

        </div>
    );
};

export default ShowDetailsRecipeComponents;