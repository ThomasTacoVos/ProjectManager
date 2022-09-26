import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login/components/login-form/login-form.component';
import { AddUserComponent } from './user/components/add-user/add-user.component';
import { UserListComponent } from './user/components/userlist/user-list.component';


const routes: Routes = [                // canActivate [AuthGuard]
 { path: '', component: DashboardComponent},
  {path: 'user', component: UserListComponent},
  {path: 'user/add', component: AddUserComponent},
  {path: 'login', component: LoginFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

