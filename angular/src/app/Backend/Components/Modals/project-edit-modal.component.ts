import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { Project } from '../../Models/project.model';
import { ProjectsService } from '../../Services/projects.services';

@Component({
    moduleId : module.id,
    selector: 'project-edit-modal',
    templateUrl: 'project-edit-modal.component.html',
    providers: [ProjectsService] 
})

export class ProjectEditModalComponent implements OnInit {
    @Input()
    selectedEditProject: Project[];
    project:Project;
    private _reader: FileReader;
    image: string;
    @ViewChild("fileInput") fileInput;
    @Output()
    deselected: EventEmitter<string> = new EventEmitter();


    constructor(private projectsService: ProjectsService, private route: ActivatedRoute) {}

    projectEdit = new FormGroup({
        id: new FormControl(),
        name: new FormControl(),
        date: new FormControl(),
        project_image: new FormControl(),
        description: new FormControl(),
        subprojects: new FormControl(),
        projecttasks: new FormControl(),
    })

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.projectsService.projectId(params['id']))
            .subscribe(project => this.project = project);
    }

    imgUpload(e: any) {
        console.log('change')
        var img = document.getElementById("img_preview") as HTMLImageElement;;
        this._reader = new FileReader();
        this._reader.readAsDataURL(e.target.files[0]);
        this._reader.onloadend = (r) => {
            this.image = this._reader.result;
            img.src = this.image;
        }
    }
    
    close() {
        this.deselected.emit('complete')
    }

    save(){
        let fi = this.fileInput.nativeElement;
        console.log(fi)
        if (fi.files && fi.files[0]) {
            let fileToUpload = fi.files[0];
            
            var imageReader: FileReader = new FileReader();
            imageReader.readAsDataURL(fileToUpload)
            imageReader.onloadend = (e) => {
                this.image = imageReader.result;
                var cleanedImage = this.image.split(',');
                var imageType = fileToUpload.type.split('/')

                /**
                 * create base64 json package
                 */
                let image_data = {
                    "content": cleanedImage[1],
                    "filetype": imageType[1]
                }

            }
        }
        let editedProject = {
            id: this.projectEdit.value.id,
            date: this.projectEdit.value.date,
            name: this.projectEdit.value.name,
            notes: this.projectEdit.value.notes,
            description: this.projectEdit.value.description,
            project_image: this.image,
            organization: 1,
        }
        console.log(editedProject)
        this.projectsService.projectsEdit(editedProject.id, editedProject)
            .subscribe(
                () => console.log(editedProject)
            )
    }

}