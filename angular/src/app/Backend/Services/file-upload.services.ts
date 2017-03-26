import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';

import { handleError } from './error-handling.service';

@Injectable()
export class FileUploadService {

    private uploadUrl: string;
    constructor(private _http: Http) { }

    upload(fileToUpload) {
        var header = new Headers({ 'Content-Type': 'application/json' });

        this.uploadUrl = 'http://service.cdn.klaritysystems.co.za/rest/file/upload';

        return this._http.post(this.uploadUrl, JSON.stringify(fileToUpload), {
            headers: header
        })
    }

    replace(fileToUpload) {
        var header = new Headers({ 'Content-Type': 'application/json' });

        this.uploadUrl = 'http://service.cdn.klaritysystems.co.za/rest/file/replace';

        return this._http.post(this.uploadUrl, JSON.stringify(fileToUpload), {
            headers: header
        })
    }

    delete(slug) {
        this.uploadUrl = 'http://service.cdn.klaritysystems.co.za/rest/file/delete/' + slug;

        return this._http.delete(this.uploadUrl)
    }
}
