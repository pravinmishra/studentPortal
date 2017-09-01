import { Injectable } from '@angular/core';
import { Http, Headers, Request, Response, URLSearchParams,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { EnvironmentConfig,IGetStudentDetailsResponseVM,IDeleteDetailsResponseVM,AuthService } from './index';
import { BaseService } from '../base/base.service';
import { HttpService } from "../base/http.service"
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class DashboardService extends BaseService {
    constructor(private http: Http, private _http: HttpService,private auth: AuthService) {
        super();
    }

    public getStudentList(data: string): Observable<IGetStudentDetailsResponseVM> {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this.auth.getAuthToken());
        headers.append('Content-Type', 'application/json')
        let options = new RequestOptions({
            headers: headers,
        });                        
        return <Observable<IGetStudentDetailsResponseVM>>this._http.get('/student?pageNumber='+data, options)
            .map(this.extractData)
            .catch(this.handleError);
        //END
    }
    public removeStudent(id: number): Observable<IDeleteDetailsResponseVM> {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this.auth.getAuthToken());
        headers.append('Content-Type', 'application/json')
        let body = JSON.stringify({ id: id });
        let options = new RequestOptions({
            headers: headers,
            body:body
        });                                
        return <Observable<IDeleteDetailsResponseVM>>this._http.delete("/student", options)
            .map(this.extractData)
            .catch(this.handleError);
    }    
}