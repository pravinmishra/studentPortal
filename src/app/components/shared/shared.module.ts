import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {HttpModule, Http} from '@angular/http';

import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  FormsModule],
  declarations: [
                  LoadingComponent,
                   ],
  exports:      [ 
                  LoadingComponent,
                ],
})
export class SharedModule { }
