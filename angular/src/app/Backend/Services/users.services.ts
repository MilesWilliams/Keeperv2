import { Injectable }                                 from '@angular/core';
import { Http, Response, Headers, URLSearchParams}    from '@angular/http';
import { Observable }                                 from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';

import { handleError }                                from './error-handling.service';

@Injectable()
export class UserService {

    private usersUrl = 'http://localhost:8000/api/organization/users';

    constructor ( private _http: Http){}
	
    getAllUsers(){
        const url = `${this.usersUrl}`;
        return this._http.get(url)
                .map( res => res.json() )
                .catch(handleError);
    }

    getSingleUser(id){
        const url = `${this.usersUrl}/${id}`;
        return this._http.get(url)
                .map( res => res.json() )
                .catch(handleError); 
    }
    
    createUser(data={}) {
        const url = `${this.usersUrl}/create`;
        let token = localStorage.getItem('token')
        let header = new Headers({'Content-Type':'application/json'});
        return this._http.put(url,JSON.stringify(data), {
            headers:header
        })
    }

    updateUser(id, data={}) {
        const url = `${this.usersUrl}/update/${id}/`;
        let header = new Headers({'Content-Type':'application/json'});
        return this._http.put(url,JSON.stringify(data), {
            headers:header
        })
    }
    
    deleteUser(id) {
        const url = `${this.usersUrl}/delete/${id}`;
        return this._http.delete(url)
    }
}
