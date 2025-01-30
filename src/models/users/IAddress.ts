import {IAddressCoordinates} from "./IAddressCoordinates.ts";

export interface IAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: IAddressCoordinates;
    country: string;
}