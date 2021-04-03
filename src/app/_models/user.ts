import { Role } from "./role";

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
    thana: Number;
    district: Number;
    homeAddress: string;
    pinCode: string;
    superUser: boolean;
    token?: string;
}
