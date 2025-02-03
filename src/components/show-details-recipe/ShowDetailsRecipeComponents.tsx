
import {useEffect} from "react";
import {IRecipes} from "../../models/recipes/IRecipes.ts";
import ShowDetailRecipeComponent from "../show-detail-recipe/ShowDetailRecipeComponent.tsx";
import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {recipeActions} from "../../redux/recipe-slice/RecipeSlice.ts";

const ShowDetailsRecipeComponents = () => {



    const dispatch = useAppDispatch();
    const recipes = useAppSelector((state) => state.recipeSlice.recipes)

    useEffect(() => {

        dispatch(recipeActions.loadRecipes());


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