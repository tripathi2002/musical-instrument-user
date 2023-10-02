import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserLoginComponent } from './user-create/user-login.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user.component';
import { LogOutComponent } from './user-create/log-out.component';

const routes: Routes = [
  {path: '', component:UserComponent},
  {path: 'create', component:UserCreateComponent},
  {path: 'login', component:UserLoginComponent},
  {path: 'logout', component:LogOutComponent},
  {path: 'detail', component:UserDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
