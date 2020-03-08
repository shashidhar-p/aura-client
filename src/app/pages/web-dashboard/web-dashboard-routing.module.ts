import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WebDashboardComponent} from "./web-dashboard.component";
import {CreateEventComponent} from "./create-event/create-event.component";
import {EditEventComponent} from "./edit-event/edit-event.component";
import {ListEventsComponent} from "./list-events/list-events.component";
import {AddCoordsComponent} from "./add-coords/add-coords.component";
import {ListCoordsComponent} from "./list-coords/list-coords.component";
import {SendNotificationsComponent} from "./send-notifications/send-notifications.component";
import {ViewNotificationsComponent} from "./view-notifications/view-notifications.component";
import {ViewParticipantsComponent} from "./view-participants/view-participants.component";
import {EditParticipantsComponent} from "./edit-participants/edit-participants.component";
import {UserComponent} from "./user/user.component";
import {CreateNotificationComponent} from "./create-notification/create-notification.component";
import {ListNotificationComponent} from "./list-notification/list-notification.component";

const routes: Routes = [{
  path: '',
  component: WebDashboardComponent,
  children: [
    {
      path: 'create-event',
      component: CreateEventComponent,
    },
    {
      path: 'edit-event',
      component: EditEventComponent,
    },
    {
      path: 'list-events',
      component: ListEventsComponent,
    },
    {
      path: 'add-coords',
      component: AddCoordsComponent,
    },
    {
      path: 'list-coords',
      component: ListCoordsComponent,
    },
    {
      path: 'send-notifications',
      component: SendNotificationsComponent,
    },
    {
      path: 'view-notifications',
      component: ViewNotificationsComponent,
    },
    {
      path: 'view-participants',
      component: ViewParticipantsComponent,
    },
    {
      path: 'edit-participants',
      component: EditParticipantsComponent,
    },
    {
      path: 'user',
      component: UserComponent,
    },
    {
      path: 'create-notification',
      component: CreateNotificationComponent,
    },
    {
      path: 'list-notification',
      component: ListNotificationComponent,
    },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebDashboardRoutingModule { }
