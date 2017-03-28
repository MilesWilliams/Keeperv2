import { Injectable }                                 from '@angular/core';
import { Http, Response, Headers, URLSearchParams}    from '@angular/http';
import { Observable }                                 from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';

import { handleError }                                from '../../Backend/Services/error-handling.service';

@Injectable()
export class LoginService {
    
    constructor(private _http: Http){}

    private loginUrl = 'http://localhost:8000/api/auth/login';
    private userUrl = 'http://localhost:8000/api/organization/users'
    userLogin(credentials) {

        const url = `${this.loginUrl}/`
        let header = new Headers({'Content-Type':'application/json'});
        return this._http.post(url,credentials, {
            headers:header
        })
        .map( res => res.json() )
        .catch(handleError);

    }

    getUserDetailsByEmail(email) {
        const url = `${this.userUrl}?search=${email}`;
        return this._http.get(url)
                .map(res => res.json())
                .catch(handleError);
    }
    
}
