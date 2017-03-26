import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../Services/projects.services';

@Component({
	moduleId:module.id,
	selector : 'projects',
	templateUrl : 'projects.component.html',
	providers : [ProjectsService]
})

export class ProjectsComponents implements OnInit {
	projects = [];
	proj:any;
	selectedProj:any
	constructor( private projectsService : ProjectsService){}
	
	ngOnInit() {
		this.getAllProjects();
	}

	getAllProjects() {
		this.projectsService.projectsAll()
			.subscribe(
				projects => {this.projects = projects},
                error => window.console.log(error),
				() =>window.console.log(this.projects)
			);
	}
}