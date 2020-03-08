import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebPagesRoutingModule } from './web-pages-routing.module';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { TeamComponent } from './team/team.component';
import {WebPagesComponent} from "./web-pages.component";

@NgModule({
  declarations: [WebPagesComponent, EventsComponent, HomeComponent, SponsorsComponent, TeamComponent],
  imports: [
    CommonModule,
    WebPagesRoutingModule,

  ]
})
export class WebPagesModule { }
