import {IUsers} from "./IUsers.ts";

export interface IUsersObjects {
    users:IUsers[];
    total: number;
    skip: number;
    limit: number;
}