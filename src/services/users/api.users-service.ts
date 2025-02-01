import {IUsersObjects} from "../../models/users/IUsersObject.ts";

export const getUsers= async():Promise<IUsersObjects[]> =>{
    return await fetch('https://dummyjson.com/users')
        .then(res => res.json())
}