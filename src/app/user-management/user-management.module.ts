import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {RouterModule } from '@angular/router';


@NgModule({
  declarations: [SignupComponent, LoginComponent, ForgotPasswordComponent, ChangePasswordComponent, UserProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([

      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'forgot-password', component: ForgotPasswordComponent, pathMatch: 'full'}


    ])
  ]
})
export class UserManagementModule { }
