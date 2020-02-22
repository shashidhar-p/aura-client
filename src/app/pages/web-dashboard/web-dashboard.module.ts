import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebDashboardRoutingModule } from './web-dashboard-routing.module';
import { CreateEventComponent } from './create-event/create-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { AddCoordsComponent } from './add-coords/add-coords.component';
import { ListCoordsComponent } from './list-coords/list-coords.component';
import { SendNotificationsComponent } from './send-notifications/send-notifications.component';
import { ViewNotificationsComponent } from './view-notifications/view-notifications.component';
import { ViewParticipantsComponent } from './view-participants/view-participants.component';
import { EditParticipantsComponent } from './edit-participants/edit-participants.component';
import { UserComponent } from './user/user.component';
import {WebDashboardComponent} from "./web-dashboard.component";

@NgModule({
  declarations: [WebDashboardComponent, CreateEventComponent, EditEventComponent, ListEventsComponent, AddCoordsComponent, ListCoordsComponent, SendNotificationsComponent, ViewNotificationsComponent, ViewParticipantsComponent, EditParticipantsComponent, UserComponent],
  imports: [
    CommonModule,
    WebDashboardRoutingModule
  ]
})
export class WebDashboardModule { }
