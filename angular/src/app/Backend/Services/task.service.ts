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
export class TaskService {

    private tasksUrl = 'http://localhost:8000/api/tasks';

    constructor ( private _http: Http){}
	
    tasksAll(){
        const url = `${this.tasksUrl}/`;
        return this._http.get(url)
                .map( res => res.json() )
                .catch(handleError);
    }

    taskSingle(id){
        const url = `${this.tasksUrl}/${id}`;
        return this._http.get(url)
                .map( res => res.json() )
                .catch(handleError); 
    }
    
    taskSearch(search){
        const url = `${this.tasksUrl}/?search=${search}`;
        return this._http.get(url)
                .map( res => res.json() )
                .catch(handleError); 
    }

    taskCreate(data={}) {
        const url = `${this.tasksUrl}/create`;
        let token = localStorage.getItem('token')
        let header = new Headers({'Content-Type':'application/json'});
        return this._http.put(url,JSON.stringify(data), {
            headers:header
        })
    }

    taskUpdate(id, data={}) {
        const url = `${this.tasksUrl}/update/${id}/`;
        let header = new Headers({'Content-Type':'application/json'});
        return this._http.put(url,JSON.stringify(data), {
            headers:header
        })
    }
    
    taskDelete(id) {
        const url = `${this.tasksUrl}/delete/${id}`;
        return this._http.delete(url)
    }
}
