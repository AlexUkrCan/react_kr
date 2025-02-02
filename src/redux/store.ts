import {IUsers} from "../models/users/IUsers.ts";
import {IRecipes} from "../models/recipes/IRecipes.ts";
import {configureStore, createSlice} from "@reduxjs/toolkit";

type UserSliceType = {
    user:IUsers[];
}

type RecipeSliceType = {
    recipe:IRecipes[];
}
const initialStateRecipe: RecipeSliceType = {recipe:[]}

const initialStateUser: UserSliceType = {user:[]}

const userSlice = createSlice({
    name:'userSlice',
    initialState:initialStateUser,
    reducers:{

    },
    extraReducers:builder => builder
})
const recipeSlice = createSlice({
    name:'recipeSlice',
    initialState:initialStateRecipe,
    reducers:{

    },
    extraReducers:builder => builder
})
export const store= configureStore({
    reducer:{
        userSlice:userSlice.reducer,
        recipeSlice:recipeSlice.reducer
    }
})
