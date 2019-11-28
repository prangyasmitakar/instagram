import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import{FormsModule} from '@angular/forms';
import {RouterModule,Router} from '@angular/router';
import * as firebase from 'firebase';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { AddimagesComponent } from './addimages/addimages.component';
import { AuthGuardGuard} from './auth-guard.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    AddimagesComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      
      {path:'signup',component:SignupComponent},
      {path:'addimages',component:AddimagesComponent,canActivate:[AuthGuardGuard]},
      {path:'home',component:HomeComponent},
      {path:'login',component:LoginComponent},
      
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
