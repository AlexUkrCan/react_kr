import {ICompanyAddressCoordinates} from "./ICompanyAddressCoordinates.ts";

export interface ICompanyAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: ICompanyAddressCoordinates;
    country: string;
}