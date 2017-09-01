import { Injectable } from "@angular/core";
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { EnvironmentConfig } from "../config/index";

@Injectable()
export class HttpService extends Http {

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    get(url: string, options?: RequestOptionsArgs, state?:boolean): Observable<Response> {
        if(state != undefined && state === true){
            return super.get(url, this.getRequestOptionArgs(options));
        }
        else{
            url = this.updateUrl(url);
            return super.get(url, this.getRequestOptionArgs(options));
        }
    }

    post(url: string, body?: string, options?: RequestOptionsArgs): Observable<Response> {
         url = this.updateUrl(url);
        return super.post(url, body, this.getRequestOptionArgs(options));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return super.put(url, body, this.getRequestOptionArgs(options));
    }
    patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return super.patch(url, body, this.getRequestOptionArgs(options));
    }
    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return super.delete(url, this.getRequestOptionArgs(options));
    }

    private updateUrl(req: string) {
        return EnvironmentConfig.APIGatewayUrl + req;
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
            options.headers.append('Content-Type', 'application/json');
            options.headers.append('Authorization', 'Bearer ' + localStorage.getItem('auth_token') + '|browser');
        }
        return options;
    }
}