import { Component, OnInit } from '@angular/core';

import { LoginService }    from '../../../Frontend/Services/login.service';
import { User } from '../../Models/user.model';
import { UserDetails } from '../../Models/userdetails.model';
import { ProfileService } from '../../Services/profile.services';
@Component({
    moduleId : module.id,
    selector: "profile",
    templateUrl : "profile.component.html",
    providers : [ProfileService]
}) 

export class ProfileComponent implements OnInit {

    profile = [] 

    constructor( private _profileService : ProfileService ){}

    ngOnInit(){
          this.profile = JSON.parse(sessionStorage.getItem('userProfile'));
    }            
}
