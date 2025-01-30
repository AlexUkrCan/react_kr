import {ICompanyAddress} from "./ICompanyAddress.ts";

export interface ICompany {
    department: string;
    name: string;
    title: string;
    address: ICompanyAddress;
}