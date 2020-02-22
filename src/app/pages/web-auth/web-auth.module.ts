import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebAuthRoutingModule } from './web-auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {WebAuthComponent} from "./web-auth.component";

@NgModule({
  declarations: [WebAuthComponent, LoginComponent, RegisterComponent, VerifyEmailComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    WebAuthRoutingModule
  ]
})
export class WebAuthModule { }
