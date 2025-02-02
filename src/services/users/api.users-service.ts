import {IUsersObjects} from "../../models/users/IUsersObject.ts";


export const getUsers= async():Promise<IUsersObjects[]> =>{
    return await fetch('https://dummyjson.com/auth')
        .then(res => res.json())
}