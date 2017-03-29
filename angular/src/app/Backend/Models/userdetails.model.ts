export class UserDetails {
    user_id     : string;
    username    : string;
    email       : string;
    exp         : string;

    constructor(
        user_id     : string,
        username    : string,
        email       : string,
        exp         : string,
    ){
        this.user_id    = user_id;
        this.username   = username;
        this.email      = email;
        this.exp        = exp;
    }
}