import { State } from 'src/app/_models/state';
import { User } from './user';
import { Subdivision } from './subdivision';
import { District } from './district';
import { Thana } from './thana';
export class Task {
    id: number;
    code: string;
    name: string;
    description: string;
    states: State[];
    state: State;
    districts: District[];
    subdivisions: Subdivision[];
    thanas: Thana[];
    assignedTos: User[];
    district: District;
    subdivision: Subdivision;
    thana: Thana;
    notificationEntryList: [];
    assignedTo: User;
    notification: Notification;
    notifications: Notification[];
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
}
