import { IBaseResponse } from '../shared/index';
export * from '../base/auth.service';
export * from './addStudent.component';
export * from './addStudent.routes';
export * from '../config/index';

export interface IGetSingleStudentDetailsResponseVM extends IBaseResponse{
    data:StudentdetailsVM
}
export interface IEditDetailsResponseVM extends IBaseResponse{
}    
export interface IAddDetailsResponseVM extends IBaseResponse{
}    
export interface IAddStudentRequestVM{
    Name: string,
    DOB: string,
    school: string,
    class: string,
    division: string,
    status: string    
}

export interface IStudentVM{
    Name: string,
    DOB: string,
    school: string,
    class: string,
    division: string,
    status: string        
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