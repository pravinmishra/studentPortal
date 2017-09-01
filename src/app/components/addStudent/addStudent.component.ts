import { Component } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
import { EnvironmentConfig, IAddDetailsResponseVM, IAddStudentRequestVM, IStudentVM,
    StudentdetailsVM,AuthService } from './index';
import { AddStudentService } from './addStudent.service';

@Component({
    selector: 'addStudent',
    templateUrl: 'addStudent.component.html',
    providers: [BaseComponent, AddStudentService]
})
export class AddStudentComponent {
    public studentDetail: IStudentVM;
    public addStudentSuccess:boolean;
    public addStudentSuccessMsg:string;
    public addStudentError:boolean;
    public addStudentErrorMsg:string;
    public addStudentRequestData:IAddStudentRequestVM;    
    constructor(private base: BaseComponent, private auth: AuthService, private addStudentService: AddStudentService) {
        this.studentDetail = <IStudentVM>{};
        this.addStudentRequestData = <IAddStudentRequestVM>{};
        // this.getStudentList(0);
    }
    private addStudent(f: FormGroup){
        this.addStudentSuccess = false;
        this.addStudentError = false;
        if(f.valid){
                this.addStudentRequestData = this.studentDetail;
                console.log("this.addStudentRequestData",this.addStudentRequestData);
                this.base.showLoading();
                this.addStudentService.addStudent(this.addStudentRequestData)
                .subscribe(
                (response: IAddDetailsResponseVM) => {
                    this.base.hideLoading();
                    console.log("response",response);
                    if (response.code == 200) {
                        this.addStudentSuccessMsg = response.message;
                        this.addStudentSuccess = true;
                    }
                },
                (error: any) => {
                    this.addStudentErrorMsg = error.message;
                    this.addStudentError = true;
                    this.base.hideLoading();
                    // this.base.showError(error);                    
                });
        }                
    }
}