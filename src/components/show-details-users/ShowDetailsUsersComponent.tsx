import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IRecipes} from "../../models/recipes/IRecipes.ts";
import ShowDetailUserComponent from "../show-detail-user/ShowDetailUserComponent.tsx";
import {recipeService} from "../../services/recipes-from-users/api.recipes-from-users.service.tsx";
import {IRecipesObject} from "../../models/recipes/IRecipesObject.ts";
import {loadAuthRecipes} from "../../services/api-login.service.ts";



const ShowDetailsUsersComponent = () => {
   const{id} = useParams();

   const [recipes, setRecipes] = useState<IRecipes[]>();
    useEffect(() => {
        // .then(res => res.json())
        // .then(console.log);
        // fetch('https://dummyjson.com/recipes/' + id )
        //     .then(res => res.json())
        if(id){
            recipeService.getRecipesOfUsers(id)
                .then(({recipes}:IRecipesObject) =>{
                    setRecipes(recipes);

                });
        }
         loadAuthRecipes().then(recipes =>
        {setRecipes(recipes)})

}, [id]);
    return (
        <div>
            {

                recipes &&
                recipes.map((recipe:IRecipes)=><ShowDetailUserComponent key={recipe.id} recipe={recipe}/>)
            }

        </div>
    );
};

export default ShowDetailsUsersComponent;