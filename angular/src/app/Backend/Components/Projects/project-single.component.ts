import { Component, OnInit } 		from '@angular/core';
import { Router, ActivatedRoute } 	from '@angular/router';

import { ProjectsService } 			from '../../Services/projects.services';
import { Project } 					from '../../Models/project.model';
import { TaskService }				from '../../Services/task.service';
import { CompletedPipe }			from '../../Pipes/Completed/completed.pipe';
import { SearchSubProjectPipe }     from '../../Pipes/Search-bar/search-subproject.pipe';

@Component({
	moduleId : module.id,
	selector : 'single-project',
	templateUrl : 'project-single.component.html',
	providers: [ProjectsService, SearchSubProjectPipe, TaskService] 
})

export class SingleProjectComponent implements OnInit {
	id: string;
	project = [];
	selectedProject: Project;
	selectedEditProject: Project;
	selectedTask: any[];
	selectedSubProject : any[];
	constructor(private _projectService:ProjectsService, private route:ActivatedRoute, private _taskService: TaskService){}

	ngOnInit() {
		this.route.params
			.map(params => params['id'])
			.subscribe(
				(id) => {
					this._projectService.projectId(id)
						.subscribe(project => {
							this.project = project;
						})
				}
				
			);
		
	}


	onSelectSubProject(subproject){
		
		if (this.selectedSubProject === subproject) {
			this.selectedSubProject = null;
		}
		else {
			this.selectedSubProject = subproject;
		}
	}

	editProject(selectedEditProject: Project){
		this.selectedEditProject = selectedEditProject;
	}

	addTask(selectedProject: Project) {
		this.selectedProject = selectedProject;
	}
	
	onSelect(task): void {

		if (this.selectedTask === task) {
			this.selectedTask = null;
		}
		else {
			this.selectedTask = task;
		}
	}
	closeForm(event) {
		this.selectedProject = null;
		this.selectedEditProject = null;
        this.ngOnInit();
    }

	onChecked(task): void {
		if (task.completed == false || task.completed == 0 ) {
			task.completed = 1
		}
		else if(task.completed == true || task.completed == 1 ){
			task.completed = 0
		}

		this._taskService.taskUpdate(task.id, task)
			.subscribe(
				() => console.log(task),
				() => this.ngOnInit()
			)
	}
}