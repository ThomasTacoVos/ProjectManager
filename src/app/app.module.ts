import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { UserListComponent } from './user/components/userlist/user-list.component';
import { UserDetailsComponent } from './user/components/userdetails/user-details.component';
import { TicketComponent } from './ticket/ticket.component';
import { LoginFormComponent } from './login/components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AddUserComponent } from './user/components/add-user/add-user.component';
import { DeleteUserComponent } from './user/components/delete-user/delete-user.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './db/in-memory-data.service';
import { AuthService } from './login/services/auth.service';
import { UserService } from './user/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    TicketComponent,
    UserDetailsComponent,
    LoginFormComponent,
    DashboardComponent,
    NavigationComponent,
    UserListComponent,
    AddUserComponent,
    DeleteUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    UserService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
