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
export class GroupsService {

    constructor (private _http: Http){}

    private groupsUrl = 'http://localhost:8000/api/organization/groups';

    allGroups() {
        const url = `${this.groupsUrl}`;
        return this._http.get(url)
                   .map( res => res.json() )
                   .catch(handleError);
    }

    singleGroup(id:number){
        const url = `${this.groupsUrl}/${id}`;
        return this._http.get(url)
                   .map( res => res.json() )
                   .catch(handleError);
    }

    createGroup(data){
        const url = `${this.groupsUrl}/create`;
        let header = new Headers({'Content-Type':'application/json'});
        return this._http.put(url,JSON.stringify(data), {
            headers:header
        })
    }

    deleteGroup(id:string){
        const url = `${this.groupsUrl}/delete/${id}`;
        return this._http.delete(url)
                   .map( res => res.json() )
                   .catch(handleError);
    }

    updateGroup(id:string, data){
        const url = `${this.groupsUrl}/update/${id}`;
        let header = new Headers({'Content-Type':'application/json'});
        return this._http.put(url,JSON.stringify(data), {
            headers:header
        })
    }
}