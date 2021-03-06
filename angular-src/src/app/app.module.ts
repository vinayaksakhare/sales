import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgGridModule} from "ag-grid-angular/main";
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { FlashMessagesModule} from 'angular2-flash-messages';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { Ng2CompleterModule } from 'ng2-completer';
import { NotificationModule } from './components/notification/notification.module';

// components

import { AppComponent } from './app.component';
import { AppBodyComponent } from './components/app-body/app-body.component';
import { CommentComponent } from './components/comment/comment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PopupComponent } from './components/popup/popup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

// directives 

import {DateTimePickerDirective} from 'ng2-eonasdan-datetimepicker/dist/datetimepicker.directive.js';

// services

import { AuthService } from './services/auth.service';
import { DashboardService } from './services/dashboard.service';
import { MyTasksService } from './services/my-tasks.service';
import { ValidateService} from './services/validate.service';
import { UploadService } from './services/upload.service';
import { ClientService } from './services/client.service';
import { RemindersService } from './services/reminders.service';
import { ReportService } from './services/report.service';
import { UserService } from './services/user.service';

import { AuthGuard} from './guard/auth.guard';
import { RoleGuard} from './guard/role.guard';

import { ClientdataComponent } from './components/clientdata/clientdata.component';
import { UploadComponent } from './components/upload/upload.component';
import { MyGridApplicationComponent } from './components/my-grid-application/my-grid-application.component';
import { RedComponentComponent } from './components/red-component/red-component.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { MytasksComponent } from './components/mytasks/mytasks.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { TeamDataComponent } from './components/team-data/team-data.component';
import { CommentItemComponent } from './components/comment/comment-item/comment-item.component';
import { CommentListComponent } from './components/comment/comment-list/comment-list.component';
import { CallsMeetingReportComponent } from './components/calls-meeting-report/calls-meeting-report.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { BdmFilterComponent } from './components/bdm-filter/bdm-filter.component';
import { MeetingsScheduledComponent } from './components/meetings-scheduled/meetings-scheduled.component';
import { TopCallersComponent } from './components/top-callers/top-callers.component';
import { DateFilterComponent } from './components/date-filter/date-filter.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { UserCallsLineChartComponent } from './components/shared-components/user-calls-line-chart/user-calls-line-chart.component';
import { NewClientComponent } from './components/new-client/new-client.component';
import { UserCallDetailsComponent } from './components/shared-components/user-call-details/user-call-details.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent, data: { type:"sa", title: "Team Data"}, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'upload', component: UploadComponent, canActivate: [AuthGuard]},
  { path: 'grid', component: MyGridApplicationComponent, canActivate: [AuthGuard]},
  { path: 'mytasks', component: MytasksComponent, canActivate: [AuthGuard]},
  { path: 'clients', component: ClientdataComponent, canActivate: [AuthGuard]},
  { path: 'reminders', component: RemindersComponent, canActivate: [AuthGuard]},
  { path: 'teamdata', component: TeamDataComponent, data: { type:"sa", title: "Team Data"}, canActivate: [AuthGuard, RoleGuard]},
  { path: 'editprofile', component: EditProfileComponent, canActivate: [AuthGuard]},
  { path: 'userdata', component: UserDataComponent, canActivate: [AuthGuard]}  
]

@NgModule({
  declarations: [
    AppComponent,
    AppBodyComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    ClientdataComponent,
    UploadComponent,
    FileSelectDirective,
    MyGridApplicationComponent,
    RedComponentComponent,
    EditTaskComponent,
    MytasksComponent,
    DateTimePickerDirective,
    PopupComponent,
    RemindersComponent,
    TeamDataComponent,
    CommentComponent,
    CommentItemComponent,
    CommentListComponent,
    CallsMeetingReportComponent,
    LoadingSpinnerComponent,
    EditProfileComponent,
    BdmFilterComponent,
    MeetingsScheduledComponent,
    TopCallersComponent,
    DateFilterComponent,
    UserDataComponent,
    UserCallsLineChartComponent,
    NewClientComponent,
    UserCallDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    Ng2CompleterModule,
    NotificationModule.forRoot(),
    AgGridModule.withComponents([EditTaskComponent,EditProfileComponent])
  ],
  providers: [
    ValidateService, AuthService, AuthGuard, UploadService, RoleGuard,
    DashboardService, MyTasksService, ClientService, RemindersService, UserService, ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
