import { Injectable } from '@angular/core';
import { Http, Headers, Request, Response, URLSearchParams,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { EnvironmentConfig, IAddDetailsResponseVM, IAddStudentRequestVM, IStudentVM,
    StudentdetailsVM,AuthService } from './index';
import { BaseService } from '../base/base.service';
import { HttpService } from "../base/http.service"
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class AddStudentService extends BaseService {
    constructor(private http: Http, private _http: HttpService,private auth: AuthService) {
        super();
    }

    public addStudent(data: IAddStudentRequestVM): Observable<IAddDetailsResponseVM> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.auth.getAuthToken());        
        let body = JSON.stringify({
            name:data.Name,
            DOB:data.DOB,
            school:data.school,
            class:data.class,
            division:data.division,
            status:data.status
        });
        let options = new RequestOptions({
            headers: headers,
            body: body
        });                        
        return <Observable<IAddDetailsResponseVM>>this._http.post('/student', body, options)
            .map(this.extractData)
            .catch(this.handleError);
        //END
    }    
}