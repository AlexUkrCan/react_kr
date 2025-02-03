import {IRecipes} from "../../models/recipes/IRecipes.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loadAuthRecipes} from "../../services/login-service/api-login.service.ts";



type RecipeSliceType = {
    recipes:IRecipes[];
}
const initialStateRecipe: RecipeSliceType = {recipes:[]}

const loadRecipes = createAsyncThunk("loadRecipes",async (_, thunkAPI)=>{
    const recipes = await loadAuthRecipes();
    return thunkAPI.fulfillWithValue(recipes);
})

export const recipeSlice = createSlice({
    name:'recipeSlice',
    initialState:initialStateRecipe,
    reducers:{

    },
    extraReducers:builder => builder.addCase(loadRecipes.fulfilled, (state, action:PayloadAction<IRecipes[]>)=>{
        state.recipes = action.payload;
    })
});

export const recipeActions ={...recipeSlice.actions, loadRecipes};