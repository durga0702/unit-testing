import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserComponent } from './user/user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [
  {path:'dashboard', component:UserDashboardComponent},
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path:'add-user', component:UserComponent},
  {path:'update-user', component:UpdateUserComponent},
  {path:'list-user', component:ListUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
