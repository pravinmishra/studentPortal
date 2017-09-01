import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public loggedIn: boolean = false;
  public redirectUrl: string = null;
  constructor() {
    this.loggedIn = (!!localStorage.getItem('auth_token'));
  }

  setAuthToken(authToken: any) {
    localStorage.setItem('auth_token', authToken);
    this.loggedIn = true;
  }

  getAuthToken() {
    return localStorage.getItem('auth_token');
  }

  deleteAuthToken() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return (localStorage.getItem('auth_token') == null || localStorage.getItem('auth_token') == undefined || localStorage.getItem('auth_token') == '') ? false : true;
  }
  setUserData(data:any){
    localStorage.setItem('userData',JSON.stringify(data));
  }
  getUserData():any{
    return localStorage.getItem('userData');
  }
}