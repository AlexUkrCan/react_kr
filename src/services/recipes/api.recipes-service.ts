
import {IRecipesObject} from "../../models/recipes/IRecipesObject.ts";




export const getRecipes= async():Promise<IRecipesObject[]> =>{

        return await fetch('https://dummyjson.com')
            .then(res => res.json())


}