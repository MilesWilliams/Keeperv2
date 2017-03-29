import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService }    from '../../Services/login.service';

@Component({
    moduleId : module.id,
    selector : 'login',
    templateUrl: 'login.component.html',
    providers: [LoginService]
})

export class LoginComponent {

    public redirectUrl: string = '/dashboard'; //Here is where the requested url is stored
    token:any;
    userDetails : any;
    constructor( private router:Router, private _loginService:LoginService ){}
    loginForm = new FormGroup({
        username : new FormControl(),
        email: new FormControl(),
        password: new FormControl(),
    })

    onLogin() {
        
        let loginDetails = {
            username: this.loginForm.value.username,
            email: this.loginForm.value.email,
            password: this.loginForm.value.password,
        }
        console.log(loginDetails)
        this._loginService.userLogin(loginDetails)
            .subscribe(res => {
                  if(res != false) {
                      sessionStorage.setItem('token',JSON.stringify(res.token));
                      sessionStorage.setItem('email',JSON.stringify(res.email));
                      this.getUserDetails(loginDetails.email)
                      this.redirect(); // Redirect to the stored url after user is logged in
                 }
                  else {
                      window.alert("You Have Entered incorrect information")
                  }
             });

    }

    getUserDetails(email) {
        this._loginService.getUserDetailsByEmail(email)
            .subscribe(
                res => this.userDetails = res,
                () => {sessionStorage.setItem('us',JSON.stringify(this.userDetails));}
            )
    }
    private redirect(): void {
        this.router.navigate([this.redirectUrl]); //use the stored url here
        
    }
}
