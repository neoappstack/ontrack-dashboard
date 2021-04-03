import { Subdivision } from 'src/app/_models/subdivision';
import { District } from "./district";

export class Thana {
    id: number;
    code: string;
    name: string;
    description: string;
    subdivision: Subdivision[];
    subdivisionByOne: Subdivision;
    district:string;
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
