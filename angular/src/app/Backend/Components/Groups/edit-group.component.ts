import { Component, OnInit, ViewChild }   from '@angular/core';
import { FormGroup, FormControl }         from '@angular/forms';
import { ActivatedRoute, Params }         from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import { Location }                       from '@angular/common';

import { GroupsService }                  from '../../Services/groups.services';
import { UserService }                    from '../../Services/users.services';
import { Group }                          from '../../Models/group.model';
import { UserDetails }                    from '../../Models/userdetails.model'

@Component({
    moduleId      : module.id,
    selector      : 'group-edit',
    templateUrl   : 'edit-group.component.html',
    providers     : [GroupsService, UserService]
})

export class GroupEditComponent {

    public group      : Group;
    public users      : UserDetails;
    public singleUser : UserDetails;
    public groupUsers : UserDetails[];
    public groupArray : UserDetails[] = [];
    public groupUserIds = [];
    private _reader   : FileReader;
    image: string;
    @ViewChild("fileInput") fileInput;

    constructor( private _groupService : GroupsService,
                 private _userService  : UserService,
                 private _route        : ActivatedRoute,
                 private _location     : Location 
                ){}

    ngOnInit() {
        this._route.params
            .switchMap((params: Params) => this._groupService.singleGroup(params['id']))
            .subscribe(
                (group) =>{
                    sessionStorage.setItem('editGroup', JSON.stringify(group))
                    this.group = JSON.parse(sessionStorage.getItem('editGroup'))
                    this.getGroupUsers(this.group.users);
                    // this._userService.getSingleUser(group.users)
                    //     .subscribe(
                    //         (data) => this.groupUsers = data,
                    //         () => {sessionStorage.setItem('groupUsers', JSON.stringify(this.groupUsers)) }
                    //     )
                },
                
                
            );
        
        
        this.getAllUsers();
    }
    
    editGroupForm = new FormGroup({
        id             : new FormControl(),
        name           : new FormControl(),
        description    : new FormControl(),
        group_image    : new FormControl(),
        users          : new FormGroup({
            user : new FormControl(),
        }),
    })

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
    getAllUsers() {
        this._userService.getAllUsers()
            .subscribe(
                (allUsers) => this.users = allUsers,
                (error) => window.console.log(error)
            )
        
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

    goBack(): void {
        this._location.back();
    }

    addUser(user) {
        console.log(this.editGroupForm.value.users.user)
        // for(let id of this.editGroupForm.value.users.user) {

        // this._userService.getSingleUser(id)
        //     .subscribe(
        //         (user) => this.singleUser = user,
        //         () => {window.console.log(this.singleUser)},
        //     )
        // }
        for (let id of this.groupArray) {
            this.groupUserIds.push(id.pk)
        }
        this.groupUserIds.push(parseInt(this.editGroupForm.value.users.user))
    }

    save() {
        let users;
        if (this.groupUserIds.length > 0) {
            users = this.groupUserIds
        }
        else {
            users = this.groupArray;
        }
        let fi = this.fileInput.nativeElement;
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

        let editedGroup = {
            id             : this.editGroupForm.value.id,
            name           : this.editGroupForm.value.name,
            description    : this.editGroupForm.value.description,
            organizations  : 1,
            group_image    : this.image,
            users          : users
        }

        window.console.log(editedGroup)

        this._groupService.updateGroup(editedGroup.id, editedGroup)
            .subscribe(
                (res) => window.console.log(res),
                (error) => window.console.log(error),
                () => this.goBack()
            )
    }

}