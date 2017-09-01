import { Injectable } from '@angular/core';
import { Http, Headers, Request, Response, URLSearchParams,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { EnvironmentConfig, ILoginRequestVM,ILoginResponseVM } from './index';
import { BaseService } from '../base/base.service';
import { HttpService } from "../base/http.service"
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class LoginService extends BaseService {

    constructor(private http: Http, private _http: HttpService) {
        super();
    }

    public login(data: ILoginRequestVM): Observable<ILoginResponseVM> {
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
        return <Observable<ILoginResponseVM>>this._http.post('/login', body, options)
            .map(this.extractData)
            .catch(this.handleError);
        //END
    }
}