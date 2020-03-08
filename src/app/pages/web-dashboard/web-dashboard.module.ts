import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WebDashboardRoutingModule} from './web-dashboard-routing.module';
import {CreateEventComponent} from './create-event/create-event.component';
import {EditEventComponent} from './edit-event/edit-event.component';
import {ListEventsComponent} from './list-events/list-events.component';
import {AddCoordsComponent} from './add-coords/add-coords.component';
import {ListCoordsComponent} from './list-coords/list-coords.component';
import {SendNotificationsComponent} from './send-notifications/send-notifications.component';
import {ViewNotificationsComponent} from './view-notifications/view-notifications.component';
import {ViewParticipantsComponent} from './view-participants/view-participants.component';
import {EditParticipantsComponent} from './edit-participants/edit-participants.component';
import {UserComponent} from './user/user.component';
import {WebDashboardComponent} from "./web-dashboard.component";
import {ThemeModule} from "../../@theme/theme.module";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule, NbTreeGridModule,
  NbUserModule
} from "@nebular/theme";
import {FormsModule as ngFormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxDropzoneModule} from "ngx-dropzone";
import {Ng2SmartTableModule} from "ng2-smart-table";
import { CreateNotificationComponent } from './create-notification/create-notification.component';
import { ListNotificationComponent } from './list-notification/list-notification.component';

@NgModule({
  declarations: [WebDashboardComponent,
    CreateEventComponent, EditEventComponent, ListEventsComponent, AddCoordsComponent, ListCoordsComponent,
    SendNotificationsComponent, ViewNotificationsComponent, ViewParticipantsComponent, EditParticipantsComponent, UserComponent,
    CreateNotificationComponent,
    ListNotificationComponent,],
  imports: [
    CommonModule,
    WebDashboardRoutingModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    NgxDropzoneModule,
    ReactiveFormsModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
  ],

})
export class WebDashboardModule {
}
