import { Component } 		from '@angular/core';
import { ProjectsService } 	from '../../Services/projects.services';
import { GroupsService }	from '../../Services/groups.services';


@Component({
	moduleId : module.id,
	selector : 'sidebar',
	templateUrl : 'sidebar.component.html',
	providers: [ProjectsService, GroupsService]
})

export class SidbarComponent {
	allProjects = [];
	allGroups = [];
	constructor( private projectsService : ProjectsService, private groupsService:GroupsService){}
	
	ngOnInit() {
		this.getAllProjects();
		this.getAllGroups();
	}

	getAllProjects() {
		this.projectsService.projectsAll()
			.subscribe(
				allProjects => {this.allProjects = allProjects},
                error => window.console.log(error),
				() =>window.console.log(this.allProjects)
			);
	}

	getAllGroups(){
		this.groupsService.allGroups()
			.subscribe(
				allGroups =>{this.allGroups = allGroups},
				error => window.console.log(error),
				() => window.console.log(this.allGroups)
			)
	}
}