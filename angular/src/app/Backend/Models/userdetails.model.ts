export class UserDetails {
    id              : string;
    pk              : string;
    firstname       : string;
    lastname        : string;
    email           : string;
    username        : string;
    date_created    : string;
    date_modified   : string;
    user_avatar     : string;
    user_type       : string;

    constructor(
        id              : string,
        pk              : string,
        firstname       : string,
        lastname        : string,
        email           : string,
        username        : string,
        date_created    : string,
        date_modified   : string,
        user_avatar     : string,
        user_type       : string,
    ){
        this.id             = id;
        this.pk             = pk;
        this.firstname      = firstname;
        this.lastname       = lastname;
        this.email          = email;
        this.username       = username;
        this.date_created   = date_created;
        this.date_modified  = date_modified;
        this.user_avatar    = user_avatar;
        this.user_type      = user_type;
    }
}