import { Subdivision } from 'src/app/_models/subdivision';
import { District } from './district';
import { State } from './state';

export class Thana {
    id: number;
    code: string;
    name: string;
    description: string;
    state: State;
    states: State[];
    district: District;
    districts: District[];
    subdivisions: Subdivision[];
    subdivision: Subdivision;
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
