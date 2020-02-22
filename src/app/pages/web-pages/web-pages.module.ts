import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebPagesRoutingModule } from './web-pages-routing.module';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { TeamComponent } from './team/team.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import {WebPagesComponent} from "./web-pages.component";

@NgModule({
  declarations: [WebPagesComponent,HomeComponent, EventsComponent, TeamComponent, SponsorsComponent],
  imports: [
    CommonModule,
    WebPagesRoutingModule
  ]
})
export class WebPagesModule { }
