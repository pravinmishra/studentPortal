import { IBaseResponse } from '../shared/index';

export interface IGetUserData extends IBaseResponse{

}

export interface ILogout extends IBaseResponse{

}

export * from '../base/auth.service';
export * from '../shared/index';
export * from '../config/index';
export * from './app.component';
export * from './app.service';