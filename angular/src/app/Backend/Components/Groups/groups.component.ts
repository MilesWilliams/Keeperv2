import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../../Services/groups.services';
import { ProjectsService } from '../../Services/projects.services';
import { Group }           from '../../Models/group.model';

@Component({
    moduleId : module.id,
    selector : 'groups',
    templateUrl : 'groups.component.html',
    providers: [GroupsService, ProjectsService]

})

export class GroupsComponent implements OnInit {
    allGroups:Group[] = []
    project
    constructor(private groupsService:GroupsService, private projectsService:ProjectsService){}

    ngOnInit(){
        this.getAllGroups();
    }

    getAllGroups(){
		this.groupsService.allGroups()
			.subscribe(
				allGroups =>{this.allGroups = allGroups},
				error => window.console.log(error),
				() => window.console.log(this.allGroups)
			)
	}

    // getProjects(projects) {
    //     for (var index = 0; index < projects.length; index++) {
    //         var element = projects[index];
            
    //         this.projectsService.projectSearchByName(element)
    //             .subscribe(
    //                 project =>{this.project = project},
    //                 error => window.console.log(error),
    //                 () => window.console.log(this.project)
    //             )
            
    //     }
    // }
}