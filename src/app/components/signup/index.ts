import { IBaseResponse } from '../shared/index';
export * from '../base/auth.service';
export * from '../config/index';
export * from '../shared/index';
export * from './signup.component';
export * from './signup.routes';
export * from './signup.service';


export interface ISignUpVM{
    username:string,
    password:string
}

export interface ISignUpRequestVM{
    email:string,
    password:string
}

export interface ISignUpResponseVM extends IBaseResponse{
}    