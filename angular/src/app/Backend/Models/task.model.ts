import { TaskImage } from './task-images.model';
import { TaskFile } from './task-file.model';

export class Task {
		id : string;
		due_date : string;
		completed : Boolean;
		title : string;
		notes : string;
		images : TaskImage[];
		file: TaskFile[];
		projects : string;
		sub_project: string;
		constructor(id: string, due_date: string, completed : Boolean, title: string, notes: string, projects: string, sub_project:string){
		
		this.id = id;
		this.due_date = due_date;
		this.completed = completed;
		this.title = title;
		this.notes = notes;
		this.projects = projects;
		this.sub_project = sub_project;
	}
}