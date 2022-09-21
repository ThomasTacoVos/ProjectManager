import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './Users/user/user.component';

const routes: Routes = [  
 { path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'profile', component: UserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

