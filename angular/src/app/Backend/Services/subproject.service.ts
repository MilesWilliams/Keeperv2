import { Injectable }                                 from '@angular/core';
import { Http, Response, Headers}                     from '@angular/http';
import { Observable }                                 from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';

import { handleError }                                from './error-handling.service';

@Injectable()
export class SubProjectsService {

    private subprojectsUrl: string;

    constructor ( private _http: Http){}
	
    subprojectsAll(){
        this.subprojectsUrl = 'http://localhost:8000/api/projects/sub-projects/';
        return this._http.get(this.subprojectsUrl)
                .map( res => res.json() )
                .catch(handleError);
    }

    subprojectId(id:string) {
        this.subprojectsUrl = 'http://localhost:8000/api/projects/sub-projects/ '+ id;
        return this._http.get(this.subprojectsUrl)
                .map(res => res.json())
                .catch(handleError);
    }

    subprojectQuery(id:string) {
        this.subprojectsUrl = 'http://localhost:8000/api/projects/sub-projects/project/?q=' + id;
        return this._http.get(this.subprojectsUrl)
                .map(res => res.json())
                .catch(handleError);
    }

    subprojectsCreate(data) {
        this.subprojectsUrl = 'http://localhost:8000/api/projects/sub-projects/create'
        var header = new Headers({'Content-Type':'application/json'});
        return this._http.put(this.subprojectsUrl,JSON.stringify(data), {
            headers:header
        })
    }

    subprojectDelete(id:string) {
        this.subprojectsUrl = 'http://localhost:8000/api/projects/sub-projects/delete/' + id;
        return this._http.delete(this.subprojectsUrl)
                .map(res => res.json())
                .catch(handleError);
    }

    subprojectsEdit(id, data = {}) {
        this.subprojectsUrl = 'http://localhost:8000/api/projects/sub-projects/edit/' + id;
        var header = new Headers({ 'Content-Type': 'application/json' });
        return this._http.put(this.subprojectsUrl, JSON.stringify(data), {
            headers: header
        })
    }
}
