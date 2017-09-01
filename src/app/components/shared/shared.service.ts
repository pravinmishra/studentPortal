import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
// import { IUserData, IUserVM, IAccountVM, IMFALoginVM, ICreateTeamsVM,IUserPreferencesVM} from './index';

@Injectable()
export class SharedService {
    public load:boolean;
    // public mfaLoginData: IMFALoginVM;
    // public createTeamsData:ICreateTeamsVM;
    public verificationEmail:string;
    // public userPreferences:IUserPreferencesVM;
//   public userData: BehaviorSubject<IUserData> = new BehaviorSubject<IUserData>({
//         /*user: <IUserVM>{
//             identityId: '-',
//             imgSrc: 'public/assets/img/user_sm.png',
//             name: '-'
//         },*/
//         accountList: [],
//         selectedAccount: <IAccountVM>{},
//         userPreferences:<IUserPreferencesVM>{}
//         //sessionValid: false
//     });

//     updateUserPreferences(data:IUserPreferencesVM){
//         this.userPreferences = data;
//     }

//     updateUserData(data: IUserData){
//         this.userData.next(data);
//     }
    setFlag(flag:boolean){
        if(flag==undefined){
            this.load=true;
        }else{
            this.load=flag;
        }
    }
    getFlag():boolean{
        if(this.load==undefined){
            return true;
        }else{
        return this.load
        }
    }

//     updateVerificationEmail(data:string){
//         this.verificationEmail = data;
//     }

//     updateCreateamsData(data:ICreateTeamsVM){
//         console.log("updateCreateamsData",data);
//         this.createTeamsData = data;
//     }

//     getCreateamsData(){
//         return this.createTeamsData;
//     }

//     public toggleSidebar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    
//     updateToggleSidebar(data: boolean){
//         this.toggleSidebar.next(data);
//     }
//     addMFALoginData(data:IMFALoginVM){
//         this.mfaLoginData = data;
//     }
}
