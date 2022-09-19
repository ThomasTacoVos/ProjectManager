import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './Users/user/user.component';

const routes: Routes = [  
 { path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'profile', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

