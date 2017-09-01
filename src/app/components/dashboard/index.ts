import { IBaseResponse } from '../shared/index';
export * from '../base/auth.service';
export * from './dashboard.component';
export * from './dashboard.routes';
export * from '../config/index';

export interface IGetStudentDetailsResponseVM extends IBaseResponse{
    data:Array<StudentdetailsVM>,
    numberOfPage:number;
}
export interface IDeleteDetailsResponseVM extends IBaseResponse{
}    
export interface StudentdetailsVM{
    id: number,
    Name: string,
    DOB: string,
    Age: number,
    school: string,
    class: string,
    DIVISION: string,
    studentStatus: string
}