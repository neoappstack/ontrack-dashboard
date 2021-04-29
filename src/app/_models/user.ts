import { Subdivision } from './subdivision';
import { District } from "./district";
import { Role } from "./role";
import { State } from "./state";
import { Thana } from "./thana";

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    roles: Role[];
    designation: string;
    phoneNumber: string;
    dateOfBirth:string;
    dateOfJoining: string;
    workAddress: string;
    thanas: Thana[];
    districts: District[];
    subdivisions: Subdivision[];
    states: State[];
    thana: Thana;
    subdivision: Subdivision;
    district: District;
    state: State;
    homeAddress: string;
    pinCode: string;
    superUser: boolean;
    token?: string;
}
