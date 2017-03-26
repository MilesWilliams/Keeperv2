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
export class ProjectsService {

    private projectsUrl = 'http://localhost:8000/api/projects';

    constructor ( private _http: Http){}
	
    projectsAll(){
        const url = `${this.projectsUrl}/`;
        return this._http.get(url)
                .map( res => res.json() )
                .catch(handleError);
    }

    projectId(id:string) {
        const url = `${this.projectsUrl}/${id}`;
        // this.projectsUrl = 'http://localhost:8000/api/projects/' + id;
        return this._http.get(url)
                .map(res => res.json())
                .catch(handleError);
    }

    projectsCreate(data) {
        const url = `${this.projectsUrl}/create`;
        let header = new Headers({'Content-Type':'application/json'});
        return this._http.put(url,JSON.stringify(data), {
            headers:header
        })
    }

    projectDelete(id:string) {
        const url = `${this.projectsUrl}/delete/${id}`;
        return this._http.delete(url)
                .map(res => res.json())
                .catch(handleError);
    }

    projectsEdit(id, data = {}) {
        const url = `${this.projectsUrl}/update/${id}/`;
        let objField = data;
        delete objField['id'];
        let header = new Headers({ 'Content-Type': 'application/json' });
        return this._http.put(url, JSON.stringify(objField), {
            headers: header
        })
    }
    
    projectSearchByName(name:string) {
        const url = `${this.projectsUrl}/?search=${name}`;
        return this._http.get(url)
                .map(res => res.json())
                .catch(handleError);
    }
}
