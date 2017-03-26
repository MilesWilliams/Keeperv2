import { Injectable }                               from '@angular/core';
import { Response }    								from '@angular/http';
import { Observable }                               from 'rxjs/Observable';


export function handleError (response: Response) : Observable<any> {
	let errorMessage = `${response.status} - ${response.statusText}`;

	return Observable.throw(errorMessage);
}


