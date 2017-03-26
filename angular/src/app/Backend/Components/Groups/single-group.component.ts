import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} 	from '@angular/router';

import {  } from '../../Services/projects.services';
import { GroupsService } from '../../Services/groups.services';
import { Group } from '../../Models/group.model';

@Component({
    moduleId : module.id,
    selector : 'single-group',
    templateUrl : 'single-group.component.html',
    providers: [GroupsService]

})

export class SingleGroupComponent implements OnInit {
    group: Group;
    project = []
    constructor(private groupsService:GroupsService, private route:ActivatedRoute){}

    ngOnInit(){
        this.route.params
            .switchMap((params: Params) => this.groupsService.singleGroup(+params['id']) )
            .subscribe(
                (group) => this.group = group,
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
}
