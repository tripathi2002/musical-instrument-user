import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './components/user-create.component';
import { UserLoginComponent } from './components/user-login.component';
import { UserDetailComponent } from './components/user-detail.component';

const routes: Routes = [
  {path: 'create', component:UserCreateComponent},
  {path: 'login', component:UserLoginComponent},
  {path: 'detail', component:UserDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
