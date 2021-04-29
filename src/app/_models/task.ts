import { User } from './user';
import { Subdivision } from './subdivision';
import { District } from './district';
import { Thana } from './thana';
export class Task {
    id: number;
    code: string;
    name: string;
    description: string;
    districts: District[];
    subdivisions: Subdivision[];
    thanas: Thana[];
    assignedTos: User[];
    district: District;
    subdivision: Subdivision;
    thana: Thana;
    assignedTo: User;
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
}
