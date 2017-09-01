import { Injectable } from '@angular/core';
import { Http, Headers, Request, Response, URLSearchParams,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { EnvironmentConfig,ISignUpRequestVM,ISignUpResponseVM } from './index';
import { BaseService } from '../base/base.service';
import { HttpService } from "../base/http.service"
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class SignUpService extends BaseService {

    constructor(private http: Http, private _http: HttpService) {
        super();
    }
    public signup(data: ISignUpRequestVM): Observable<ISignUpResponseVM> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let body = JSON.stringify({
            email:data.email,
            password:data.password
        });
        let options = new RequestOptions({
            headers: headers,
            body: body
        });                        
        return <Observable<ISignUpResponseVM>>this._http.post('/users', body, options)
            .map(this.extractData)
            .catch(this.handleError);
        //END
    }    
}