import { IBaseResponse } from '../shared/index';
export * from '../base/auth.service';
export * from '../config/index';
export * from '../shared/index';
export * from './login.component';
export * from './login.routes';
// export * from './login.service';

export interface IResetPasswordVM {
    email: string,
    token: string,
    newPassword: string,
    cnfPassword: string
}


export interface ILoginVM{
    username:string,
    password:string
}
export interface ILoginRequestVM{
    email:string,
    password:string
}

export interface ILoginResponseVM extends IBaseResponse{
    token:string
}