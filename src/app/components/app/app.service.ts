import { Injectable } from '@angular/core';
import { Http, Headers, Request, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { EnvironmentConfig, IGetUserData } from './index';
import { CanActivate } from '@angular/router';
//import auth services
import { AuthService } from "../base/auth.service";
import { BaseService } from '../base/base.service';
import { HttpService } from "../base/http.service"


// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

//END
//MODALS
import { ILogout } from "./index";
//END
@Injectable()
export class AppService extends BaseService {

    constructor(private http: Http, private _auth: AuthService, public _http: HttpService) {
        super();
    }

    //LOGOUT  HERE 
    public logoutService(): Observable<ILogout> {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this._auth.getAuthToken() + '|browser');
        // return <Observable<IForogotLogin>> this.http.request(new Request({
        //     headers: headers,
        //     method: "DELETE",
        //     url: EnvironmentConfig.APIGatewayUrl + "/token',
        //     body:'';
        // }))
        //     .map(this.extractData)
        //     .catch(this.handleError);

        return Observable.of(<ILogout>{}).map(o => <ILogout>{
            message: "Password is successfully changed",
            code: 200,
            error: null,
            error_description: null
        });

    }


}