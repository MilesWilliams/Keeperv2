import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { Project } from '../../Models/project.model';
import { ProjectsService } from '../../Services/projects.services';

@Component({
    moduleId : module.id,
    selector: 'project-add-modal',
    templateUrl: 'project-add.modal.component.html',
    providers: [ProjectsService] 
})

export class ProjectsAddModalComponent {
    constructor(){}

    projectAdd = new FormGroup({
        id: new FormControl(),
        name: new FormControl(),
        date: new FormControl(),
        project_image: new FormControl(),
        description: new FormControl(),
        subprojects: new FormControl(),
        projecttasks: new FormControl(),
    })
}