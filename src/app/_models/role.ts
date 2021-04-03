import { Authority } from './authority';
export class Role {
    id: number;
    code: string;
    name: string;
    description: string;
    authorities: Authority[];
    active: boolean;
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
}
