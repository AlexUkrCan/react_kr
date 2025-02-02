import {IRecipesObject} from "../../models/recipes/IRecipesObject.ts";

export const recipeService ={
    getRecipesOfUsers: async (userId:string):Promise<IRecipesObject>=>{
       return  await  fetch('https://dummyjson.com/recipes/' + userId)
            .then(res => res.json())
    }
}