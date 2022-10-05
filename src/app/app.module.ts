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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
