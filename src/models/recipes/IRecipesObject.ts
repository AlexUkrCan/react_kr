import {IRecipes} from "./IRecipes.ts";

export interface  IRecipesObject{
    recipes: IRecipes[];
    total: number;
    skip: number;
    limit: number;
}