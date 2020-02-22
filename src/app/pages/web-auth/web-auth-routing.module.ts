import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {VerifyEmailComponent} from "./verify-email/verify-email.component";
import {WebAuthComponent} from "./web-auth.component";

const routes: Routes = [{
  path: '',
  component: WebAuthComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'register',
      component: RegisterComponent,
    },
    {
      path: 'reset-password',
      component: ResetPasswordComponent,
    },
    {
      path: 'verify-email',
      component: VerifyEmailComponent,
    },

  ],
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebAuthRoutingModule { }
