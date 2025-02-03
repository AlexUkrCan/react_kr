import {IUsers} from "../../models/users/IUsers.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loadAuthUsers} from "../../services/login-service/api-login.service.ts";

type UserSliceType = {
    users:IUsers[];
}

const initialStateUser: UserSliceType = {users:[]}

const loadUsers = createAsyncThunk("loadUsers",async (_, thunkAPI)=>{
    const users = await loadAuthUsers();
    return thunkAPI.fulfillWithValue(users);
})

export const userSlice = createSlice({
    name:'userSlice',
    initialState:initialStateUser,
    reducers:{

    },
    extraReducers:builder => builder.addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUsers[]>)=>{
        state.users = action.payload;
    })
});

export const userActions ={...userSlice.actions, loadUsers};