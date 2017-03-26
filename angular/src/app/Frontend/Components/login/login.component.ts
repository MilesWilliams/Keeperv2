import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId : module.id,
    selector : 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent {

    public redirectUrl: string = '/dashboard'; //Here is where the requested url is stored

    constructor( private router:Router ){}
    loginForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl(),
    })

    

    onLogin() {
        this.redirect();
    }

    private redirect(): void {
        this.router.navigate([this.redirectUrl]); //use the stored url here
    }
}