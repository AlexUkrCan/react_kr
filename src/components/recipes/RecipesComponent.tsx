import {useEffect, useState} from "react";
import RecipeComponent from "./RecipeComponent.tsx";
import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {recipeActions} from "../../redux/recipe-slice/RecipeSlice.ts";
import {loadAuthRecipes,  refresh} from "../../services/login-service/api-login.service.ts";


const RecipesComponent = () => {

    const dispatch = useAppDispatch();
    const recipes = useAppSelector((state) => state.recipeSlice.recipes)

    useEffect(() => {

        dispatch(recipeActions.loadRecipes());

        refresh()
            .then(() =>loadAuthRecipes())
            .then(recipes =>console.log(recipes))


    },[]);
    const[searchTerm, setSearchTerm] = useState('')
    return (
        <div>
            <div>Search</div>
            <div>
                <input value={searchTerm} type="text" placeholder="Search recipe" onChange={(e)=>setSearchTerm(e.target.value)}/>

            </div>
            {
                recipes.map(recipe =><RecipeComponent key={recipe.id} item={recipe} />)
            }

        </div>
    );
};

export default RecipesComponent;