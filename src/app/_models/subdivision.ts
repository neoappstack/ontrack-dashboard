import { District } from "./district";

export class Subdivision {
    id: number;
    code: string;
    name: string;
    description: string;
    district: District[];
    districtByOne: District;
    state: string
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
