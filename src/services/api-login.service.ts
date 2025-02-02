
import axios from "axios";
import {retriveLocalStorage} from "../helper/helper.ts";
import {IUsersWithTokens} from "../models/autentefication_users/IUsersWithTokens.ts";
import {IRecipes} from "../models/recipes/IRecipes.ts";
import {IRecipesObject} from "../models/recipes/IRecipesObject.ts";
import {IUsers} from "../models/users/IUsers.ts";
import {IUsersObjects} from "../models/users/IUsersObject.ts";



const axiosInstance =  axios.create({
    baseURL: "https://dummyjson.com/auth",
    headers:{}
});



//будемо перехоплювати всі запити які будуть get
axiosInstance.interceptors.request.use((requestObject)=>{
    //беремо метод який використовує requestObject та переводимо його у великі літери так як зазвичай ці методи прописані великими літерами
    if(requestObject.method?.toUpperCase() === "GET"){
        //в розділ з хедерами додаєм хедер Authorization
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUsersWithTokens>('user').accessToken;
    }
    return requestObject
})


//створюємо метод login яка буде приймати обєкт LoginData та робимо для нього тип

export type LoginData = {
    username: string;
    password: string;
    expiresInMins: number;
}
export const login =async ({username, password, expiresInMins}:LoginData):Promise<void> => {
    //робимо запит на відповідний endpoint
    const {data:userWithtoken} = await axiosInstance.post<IUsersWithTokens>("/login", {username, password, expiresInMins});
    //запит поверне нам відповідь в середмні якої вже будуть наші токени
    console.log(userWithtoken);
    //зберігаємо нащ токен в localstorage
    localStorage.setItem('user', JSON.stringify(userWithtoken));
}

export const loadAuthRecipes = async ():Promise<IRecipes[]> => {
    const {data:{recipes}} = await axiosInstance.get<IRecipesObject>('/recipes',{});
    return recipes;
}
export const loadAuthRecipesWithId = async ():Promise<IRecipes[]> => {
    const {data:{recipes}} = await axiosInstance.get<IRecipesObject>('users/:id/recipes',{});
    return recipes;
}

export const loadAuthUsers = async ():Promise<IUsers[]> => {
    const {data:{users}} = await axiosInstance.get<IUsersObjects>('/users', {});
    return users;
}


//робимо функцію для рефрешу

