import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, RequestOptions, XHRBackend,Http } from '@angular/http';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { NvD3Component } from 'ng2-nvd3';
import 'd3';
import 'nvd3';
import { SharedModule } from './app/components/shared/shared.module';
import { AuthGuard } from './app/components/authGuard/authGuard.component';
import { HttpService } from './app/components/base/http.service';
import { httpFactory } from './app/components/base/http.factory';
import { BaseComponent } from './app/components/base/base.component';
import { StudentAppComponent } from './student-app.component';
import { SignUpComponent } from './app/components/signup/index';
import { LoginComponent } from './app/components/login/index';
import {
  AppComponent
} from './app/components/app/index';
import {
  DashboardComponent,
} from './app/components/dashboard/index';
import {
  AddStudentComponent,
} from './app/components/addStudent/index';
// Common Services for all components
import { SharedService } from './app/components/shared/shared.service';
import { AuthService } from './app/components/base/auth.service';
import { AppRoutes } from './student-app.routes';
import { Ng2OrderModule } from 'ng2-order-pipe';
let routerModule = RouterModule.forRoot(AppRoutes);
routerModule = RouterModule.forRoot(AppRoutes, { useHash: true });
@NgModule({
  imports: [BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routerModule,
    SharedModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    BrowserAnimationsModule,Ng2OrderModule
  ],
  declarations: [ //components
    AppComponent,
    StudentAppComponent,
    SignUpComponent,
    DashboardComponent,
    AddStudentComponent,    
    LoginComponent,
    NvD3Component

  ],
  providers: [Title,
    AuthService,
    SharedService,
    AuthGuard,BaseComponent,
    {
      provide: HttpService,
      useFactory:httpFactory,
      deps: [XHRBackend, RequestOptions]
    }

  ],

  bootstrap: [StudentAppComponent],
  entryComponents: []
})

export class StudentAppModule { 

}
