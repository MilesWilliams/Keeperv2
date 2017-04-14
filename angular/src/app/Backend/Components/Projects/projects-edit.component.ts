import { Component, OnInit, ViewChild }    from '@angular/core';
import { FormGroup, FormControl }          from '@angular/forms';
import { ActivatedRoute, Params }          from '@angular/router';

import { Project }                         from '../../Models/project.model';
import { ProjectsService }                 from '../../Services/projects.services';

@Component({
    moduleId : module.id,
    selector : 'project-edit',
    templateUrl : 'projects-edit.component.html',
    providers : [ProjectsService] 
})

export class ProjectEditComponent implements OnInit {
    selectedProject: Project[];
    project: Project;
    private _reader: FileReader;
    image: string;
    @ViewChild("fileInput") fileInput;

    constructor(private _projectsService: ProjectsService, private _route: ActivatedRoute){}

    projectEdit = new FormGroup ({
        id: new FormControl(),
        name: new FormControl(),
        date: new FormControl(),
        project_image: new FormControl(),
        description: new FormControl(),
        subprojects: new FormControl(),
        projecttasks: new FormControl(),
    })

    ngOnInit() {
        this._route.params
            .switchMap((params: Params) => this._projectsService.projectId(params['id']))
            .subscribe(project => this.project = project);
    }

    imgUpload(e: any) {
        var img = document.getElementById("img_preview") as HTMLImageElement;;
        this._reader = new FileReader();
        this._reader.readAsDataURL(e.target.files[0]);
        this._reader.onloadend = (r) => {
            this.image = this._reader.result;
            img.src = this.image;
        }
    }

    getProjectData() {

    }

    save() {

    }

}