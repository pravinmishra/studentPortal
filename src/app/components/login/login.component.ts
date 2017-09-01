import { Component } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { EnvironmentConfig, ILoginVM, ILoginResponseVM, ILoginRequestVM,AuthService } from './index';
import { SharedService } from '../shared/shared.service';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    providers: [BaseComponent,LoginService]
})
export class LoginComponent {
    public model:ILoginVM;
    public loginrequestData:ILoginRequestVM;
    public loginSuccess:boolean;
    public loginSuccessMsg:string;
    public loginError:boolean;
    public loginErrorMsg:string;
    constructor(private router: Router, private route: ActivatedRoute, private base: BaseComponent, public sharedService: SharedService, public loginService:LoginService,private auth: AuthService) {
        this.sharedService.setFlag(false);
        this.base.loading = this.sharedService.getFlag();
        this.model = <ILoginVM>{};
        this.loginrequestData = <ILoginRequestVM>{};
        this.loginSuccess = false;
        this.loginError = false;
    }

    validateEmail(email:any) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    phonenumber(phone : any) {
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(phone.match(phoneno)) {
          return true;
        }
        else {
          return false;
        }
      }    

    private login(f: FormGroup){
        this.loginSuccess = false;
        this.loginError = false;
        if(f.valid){
            if(this.validateEmail(this.model.username) || this.phonenumber(this.model.username)){
                this.loginrequestData.email = this.model.username;
                this.loginrequestData.password = this.model.password;
                this.base.showLoading();
                this.loginService.login(this.loginrequestData)
                .subscribe(
                (response: ILoginResponseVM) => {
                    this.base.hideLoading();
                    console.log("response",response);
                    if (response.code == 200) {
                        this.auth.setAuthToken(response.token);
                        this.router.navigate(['/app/dashboard']);                        
                    }
                },
                (error: any) => {
                    this.loginErrorMsg = error.message;
                    this.base.hideLoading();
                    // this.base.showError(error);                    
                });
            }
            else{
                this.loginErrorMsg = "Not a valid Email or Phone";
                this.loginError = true;
            }
        }                
    }    
}