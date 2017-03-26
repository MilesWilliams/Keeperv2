import { Component, ViewChild }       from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators }     			from '@angular/forms';
import { GroupsService }   from '../../Services/groups.services';  

@Component({
    moduleId     : module.id,
    selector     : 'add-group',
    templateUrl  : 'add-group.component.html',
    providers    : [GroupsService]
}) 

export class AddGroupComponent {
    private _reader: FileReader;
    image : string;
    @ViewChild("fileInput") fileInput;
    constructor(private groupservice: GroupsService){}

    addGroup = new FormGroup({
		name 		    : new FormControl(),
		description     : new FormControl(),
		group_image	    : new FormControl(),
		users 		    : new FormControl(),
        organizations   : new FormControl(),
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

    save() :void {
 
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
        console.log(this.image)
        let newGroup = {
            name: this.addGroup.value.name,
            description: this.addGroup.value.description,
            group_image: this.image,
            users: this.addGroup.value.users,
            organizations: 1,
        }
        console.log(newGroup)
        this.groupservice.createGroup(newGroup)
            .subscribe(
                () => console.log(newGroup)
            );
    }

    
}