import { Component } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
import { ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { EnvironmentConfig,ISignUpVM,ISignUpRequestVM,ISignUpResponseVM } from './index';
import { SignUpService } from './signup.service';
import { SharedService } from '../shared/shared.service';

@Component({
    selector: 'signup',
    templateUrl: 'signup.component.html',
    providers: [BaseComponent,SignUpService]
})
export class SignUpComponent {
    public model:ISignUpVM
    public signuprequestData:ISignUpRequestVM;
    public signupSuccess:boolean;
    public signupSuccessMsg:string;
    public signupError:boolean;
    public signupErrorMsg:string;    
    constructor(private router: Router, private route: ActivatedRoute, private base: BaseComponent, private signupService: SignUpService, public sharedService: SharedService) {
        this.sharedService.setFlag(false);             
        this.model = <ISignUpVM>{};
        this.signuprequestData = <ISignUpRequestVM>{};
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

    private signup(f: FormGroup){
        this.signupSuccess = false;
        this.signupError = false;
        if(f.valid){
            if(this.validateEmail(this.model.username) || this.phonenumber(this.model.username)){
                this.signuprequestData.email = this.model.username;
                this.signuprequestData.password = this.model.password;
                this.base.showLoading();
                this.signupService.signup(this.signuprequestData)
                .subscribe(
                (response: ISignUpResponseVM) => {
                    this.base.hideLoading();
                    console.log("response",response);
                    if (response.code == 200) {
                        this.signupSuccessMsg = response.message;
                        this.signupSuccess = true;
                    }
                },
                (error: any) => {
                    this.signupErrorMsg = error.message;
                    this.base.hideLoading();
                    // this.base.showError(error);                    
                });
            }
            else{
                this.signupErrorMsg = "Not a valid Email or Phone";
                this.signupError = true;
            }
        }                
    }
}