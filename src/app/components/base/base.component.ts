import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Router } from "@angular/router";
@Injectable()
export class BaseComponent {
    public hasError: boolean;
    public errorMsg: string;
    public hasSuccess: boolean;
    public successMsg: string;
    public loading: boolean;
    public loadingCounter: number;
    constructor(private router:Router) {
        this.hasError = false;
        this.errorMsg = '';
        this.hasSuccess = false;
        this.successMsg = '';
        this.loading = false;
        this.loadingCounter = 0;
    }

    showLoading() {
        this.loading = true;
        this.loadingCounter++;
    }

    hideLoading() {
        this.loadingCounter--;
        if (this.loadingCounter <= 0) {
            this.loading = false;
        }
    }

    showError(msg: string) {
        this.hasError = true;
        this.errorMsg = msg;
        console.log("Show Errror");
    }

    hideError() {
        this.hasError = false;
        this.errorMsg = '';
    }

    showSuccess(msg: string) {
        this.hasSuccess = true;
        this.successMsg = msg;
    }

    hideSuccess() {
        this.hasSuccess = false;
        this.successMsg = '';
    }

    getParam(snapshot: ActivatedRouteSnapshot, key: string): any {
        return (snapshot.params[key] != undefined) ? snapshot.params : (snapshot.firstChild ? this.getParam(snapshot.firstChild, key) : null);
    }
}
