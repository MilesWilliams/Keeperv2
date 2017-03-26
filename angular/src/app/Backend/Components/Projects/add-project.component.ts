import { Component, ViewChild }      from '@angular/core';
import { FormGroup, FormControl }    from '@angular/forms';
import { ProjectsService }           from '../../Services/projects.services';
import { Project }                   from '../../Models/project.model';

@Component({
    moduleId     : module.id,
    selector     : 'add-component',
    templateUrl  : 'add-project.component.html',
    providers    : [ProjectsService] 
})

export class AddProjectComponent {
    private _reader: FileReader;
    image: string;
    @ViewChild("fileInput") fileInput;

    constructor(private projectsService:ProjectsService){}

    projectAdd = new FormGroup ({
        name: new FormControl(),
        date: new FormControl(),
        project_image: new FormControl(),
        description: new FormControl(),
    })

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

    save() {
        let fi = this.fileInput.nativeElement;
        console.log(fi)
        if (fi.files && fi.files[0]) {
            let fileToUpload = fi.files[0];
            
            var imageReader: FileReader = new FileReader();
            imageReader.readAsDataURL(fileToUpload)
            imageReader.onloadend = (e) => {
                this.image = imageReader.result;
            }
        }
        let newProject = {
            name: this.projectAdd.value.name,
            date: this.projectAdd.value.date,
            description: this.projectAdd.value.description,
            project_image: this.image,
            organization: 1,
        }
        this.projectsService.projectsCreate(newProject)
            .subscribe(
                () => console.log(newProject)
            )
    }

}