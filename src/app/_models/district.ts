import { Authority } from "./authority";
import { State } from "./state";

export class District {
    id: number;
    code: string;
    name: string;
    description: string;
    state: State;
    states: State[];
    active: boolean;
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
}
