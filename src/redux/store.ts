
import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./user-slice/UserSlice.ts";
import {recipeSlice} from "./recipe-slice/RecipeSlice.ts";
import {useDispatch, useSelector} from "react-redux";

export const store= configureStore({
    reducer:{
        userSlice:userSlice.reducer,
        recipeSlice:recipeSlice.reducer
    }
})

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
