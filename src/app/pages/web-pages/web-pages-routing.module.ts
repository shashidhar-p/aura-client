import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WebAuthComponent} from "../web-auth/web-auth.component";
import {LoginComponent} from "../web-auth/login/login.component";
import {RegisterComponent} from "../web-auth/register/register.component";
import {ResetPasswordComponent} from "../web-auth/reset-password/reset-password.component";
import {VerifyEmailComponent} from "../web-auth/verify-email/verify-email.component";
import {WebPagesComponent} from "./web-pages.component";
import {HomeComponent} from "./home/home.component";
import {EventsComponent} from "./events/events.component";
import {TeamComponent} from "./team/team.component";
import {SponsorsComponent} from "./sponsors/sponsors.component";

const routes: Routes = [{
  path: '',
  component: WebPagesComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'events',
      component: EventsComponent,
    },
    {
      path: 'team',
      component: TeamComponent,
    },
    {
      path: 'sponsors',
      component: SponsorsComponent,
    },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebPagesRoutingModule { }
