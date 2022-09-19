import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { UserComponent } from './Users/user/user.component';
import { TicketComponent } from './ticket/ticket.component';
import { UserdetailsComponent } from './Users/userdetails/userdetails.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    UserComponent,
    TicketComponent,
    UserdetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
