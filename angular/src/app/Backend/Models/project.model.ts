import { Task }           from './task.model';
import { SubProject }     from './sub-project.model';
export class Project {
    id : string;
    name : string;
    date : any;
    project_image : string;
    description : string;
    subprojects: SubProject[];
    projecttasks : Task[];

    constructor(id: string, name: string, date: string, project_image: string, description: string, subprojects: SubProject[], projecttasks: Task[]) {

        this.id = id;
        this.name = name;
        this.date = date;
        this.project_image = project_image;
        this.description = description;
        this.subprojects = subprojects;
        this.projecttasks = projecttasks;
    }

}