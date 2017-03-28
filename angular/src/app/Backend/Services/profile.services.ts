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
export class ProfileService {
    
}