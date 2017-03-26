import { Task } from './task.model';

export class SubProject {
    id : string;
    name : string;
    projects : string;
    subprojecttasks : Task[];

    constructor(id: string, name: string, projects: string, subprojecttasks: Task[]) {

        this.id = id ;
        this.name = name;
        this. projects = projects;
        this.subprojecttasks = subprojecttasks;
    }
}