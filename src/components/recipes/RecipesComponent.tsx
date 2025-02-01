import {useEffect, useState} from "react";
import {IRecipes} from "../../models/recipes/IRecipes.ts";
import {IRecipesObject} from "../../models/recipes/IRecipesObject.ts";
import RecipeComponent from "./RecipeComponent.tsx";
import {getRecipes} from "../../services/recipes/api.recipes-service.ts";


const RecipesComponent = () => {
    const [recipes, setRecipes] = useState<IRecipes[]>([]);

    useEffect(() => {
        getRecipes()
            .then(({recipes}:IRecipesObject) => setRecipes(recipes));
    },[])

    return (
        <div>
            {
                recipes.map(recipe =><RecipeComponent key={recipe.id} item={recipe} />)
            }

        </div>
    );
};

export default RecipesComponent;