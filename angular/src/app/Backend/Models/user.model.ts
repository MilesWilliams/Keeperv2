import { UserDetails } from '../Models/userdetails.model';
export class User {
    id           : string;
    username     : string;
    email        : string ;
    userdetails  : {};
    token        : string;

    constructor (
        id               : string,
        username         : string,
        email            : string,
        userdetails      : string,
        token            : string,
    ) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.userdetails = userdetails;
        this.token = token;
    }
}
