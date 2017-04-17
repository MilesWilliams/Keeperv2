import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} 	from '@angular/router';

import {  } from '../../Services/projects.services';
import { GroupsService } from '../../Services/groups.services';
import { UserService }                    from '../../Services/users.services';
import { Group }                          from '../../Models/group.model';
import { UserDetails }                    from '../../Models/userdetails.model'
import { ProjectsService }                from '../../Services/projects.services';
import { Project }                        from '../../Models/project.model';

@Component({
    moduleId : module.id,
    selector : 'single-group',
    templateUrl : 'single-group.component.html',
    providers: [GroupsService, UserService, ProjectsService]

})

export class SingleGroupComponent implements OnInit {
    group: Group;
    project = [];
    public groupUsers : UserDetails[];
    public groupArray : UserDetails[] = [];
    public groupProjects : Project[] = [];
    constructor(private groupsService:GroupsService,
                private route:ActivatedRoute,
                private _userService:UserService,
                private _projectService:ProjectsService){}

    ngOnInit(){
        this.route.params
            .switchMap((params: Params) => this.groupsService.singleGroup(+params['id']) )
            .subscribe(
                (group) => {
                    this.group = group,
                    this.getGroupUsers(this.group.users)
                    this.getGroupProjects(this.group.project_groups)
                },
                () => sessionStorage.setItem('goup_projects', JSON.stringify(this.group))
            )

            this.loadProjects(this.project)
    }
    loadProjects(project){
        window.console.log(project)
    }
    test(group){
        window.console.log(group)
    }

    getGroupUsers(allGroupUsers) {

        for(let id of allGroupUsers){
            this._userService.getSingleUser(id)
                .subscribe(
                    (response) => {
                        this.groupArray.push(response);
                        this.groupUsers = response
                
                    },
                    (error) => window.console.log('test'),
                )

        }
        window.console.log(this.groupArray);
    }
    getGroupProjects(allGroupUsers) {

        for(let id of allGroupUsers){
            this._projectService.projectSearchByName(id)
                .subscribe(
                    (response) => {
                        this.groupProjects.push(response);
                        // this.groupUsers = response
                
                    },
                    (error) => window.console.log('test'),
                )

        }
        window.console.log(this.groupProjects);
    }
}
