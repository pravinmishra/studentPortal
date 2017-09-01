import { Component } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { EnvironmentConfig, IGetStudentDetailsResponseVM, StudentdetailsVM, IDeleteDetailsResponseVM,AuthService } from './index';
import { DashboardService } from './dashboard.service';

@Component({
    selector: 'student-dashboard',
    templateUrl: 'dashboard.component.html',
    providers: [BaseComponent, DashboardService]
})
export class DashboardComponent {
    public studentList: Array<StudentdetailsVM>;
    public pageCount:number;
    public countArray:Array<number>;
    public iterator:number
    constructor(private base: BaseComponent, private auth: AuthService, private dashboardService: DashboardService) {
        this.studentList = [];
        this.countArray = [];
        this.iterator = 1;
        this.getStudentList(0);
    }
    toInteger(number:number){ 
        return Math.round(  // round to nearest integer
          Number(number)    // type cast your input
        ); 
      };    
    private getStudentList(pageNum: any) {
        this.countArray = [];
        this.pageCount = 0;
        this.iterator = 1;
        this.base.showLoading();
        this.dashboardService.getStudentList(pageNum)
            .subscribe(
            (response: IGetStudentDetailsResponseVM) => {
                this.base.hideLoading();
                console.log("response", response);
                if (response.code == 200) {
                    this.studentList = response.data;
                    this.pageCount = this.toInteger(response.numberOfPage);
                    for(var i = 0;i<this.pageCount;i++){
                        this.countArray.push(this.iterator);
                        this.iterator++;
                    }                                
                }
            },
            (error: any) => {
                this.base.hideLoading();
                // this.base.showError(error);                    
            });
    }
    private deleteStudent(id:number){
        this.base.showLoading();
        this.dashboardService.removeStudent(id)
            .subscribe(
            (response: IDeleteDetailsResponseVM) => {
                this.base.hideLoading();
                console.log("response", response);
                if (response.code == 200) {
                    console.log("this.studentList before",this.studentList);                    
                    for(var i = 0;i<this.studentList.length;i++){
                        if(this.studentList[i].id == id){
                            console.log("this.studentList[i].id",this.studentList[i].id);
                            this.studentList.splice(i,1);                            
                        }
                    }
                    console.log("this.studentList after",this.studentList);
                    if(this.studentList.length < 1){
                        console.log("this.studentList.length less than 1");
                        this.getStudentList(0);
                    }
                }
            },
            (error: any) => {
                this.base.hideLoading();
                // this.base.showError(error);                    
            });        
    }
}