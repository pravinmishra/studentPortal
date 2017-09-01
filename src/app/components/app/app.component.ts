import { Component } from '@angular/core';
import {
    Router, ActivatedRoute, ActivatedRouteSnapshot, Params, Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError
} from '@angular/router';
import { AppService } from './app.service';
import { BaseComponent } from '../base/base.component';
import { ViewContainerRef, ViewEncapsulation } from '@angular/core';
import {AuthService, IGetUserData} from './index';
import { SharedService } from '../shared/shared.service';
// import { TranslateService } from 'ng2-translate/ng2-translate';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { ILogout } from "./index";
//END
@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    providers: [AppService, BaseComponent, Modal],
})
export class AppComponent {
    constructor(private router: Router, private route: ActivatedRoute, private base: BaseComponent, private appService: AppService, private auth: AuthService, public sharedService: SharedService, public modal: Modal) {

    }

    logout() {
        this.base.showLoading();
        this.base.hideError();
        this.appService.logoutService().subscribe((res: ILogout) => {
            this.base.hideLoading();
            if (res.code == 200) {
                this.auth.deleteAuthToken();
                localStorage.removeItem('userData');
                this.router.navigate(['/login']);
            }
        },
            (error: any) => {
                console.log('error: ', error);
                this.base.hideLoading();
                this.base.showError(error.message);
            });


    }

}