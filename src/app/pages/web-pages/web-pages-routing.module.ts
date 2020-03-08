import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsComponent} from "./events/events.component";
import {HomeComponent} from "./home/home.component";
import {SponsorsComponent} from "./sponsors/sponsors.component";
import {TeamComponent} from "./team/team.component";
import {WebPagesModule} from "./web-pages.module";

const routes: Routes = [{
  path: '',

  children: [
    {
      path: 'events',
      component: EventsComponent,
    },
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'sponsors',
      component: SponsorsComponent,
    },
    {
      path: 'team',
      component: TeamComponent,
    },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebPagesRoutingModule { }
