import { Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from "./auth.service";
import { Router } from "@angular/router"
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export class BaseService {

    constructor(){
            
    }
    setHeaders(headers: Headers) {

       // headers.append('Content-Type', 'application/json');

        // headers.append('Access-Control-Allow-Origin', '*');
        // var token: string = 'Bearer ' + localStorage.getItem('auth_token');
        // headers.append('Authorization', token);
    }

    extractXmlToJson(res: any) {
        let xml2json: any;
        return res || {};
    }

    extractData(res: Response) {
        let body = res.json();

        return body || {};
    }


    handleError(error: any): any {
        let err = error.json();
        console.log("error",error.message);
        let body = JSON.parse(error._body) 
                console.log("Errorrrr",error._body);
        let errObj = {};
        let errMsg = (body.message) ?
            body.message : 'Server error';

        errObj = {
            code: error.status,
            message: errMsg
        }
        console.log('handleError errObj: ', errObj);
        return Observable.throw(errObj);

    }

    // extractData(res: Response) {
    //     console.log('res: ', res);
    //     let body = res.json();
    //     return body || {};
    // }

    // handleError(error: any) {
    //     console.log('error: ', error);
    //     if (error._body) {
    //         let errorBody = JSON.parse(error._body);
    //         return Observable.throw(errorBody);
    //     } else {
    //         let errMsg = (error.message) ?
    //             error.message :
    //             error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //         return Observable.throw(errMsg);
    //     }

    // }
}