import { State } from './state';
import { District } from "./district";

export class Subdivision {
    id: number;
    code: string;
    name: string;
    description: string;
    districts: District[];
    district: District;
    state: State;
    states: State[];
    address: string;
    city: string;
    postalCode: string;
    phoneNumber: string;
    active: boolean;
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
}
