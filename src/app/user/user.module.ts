import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserLoginComponent } from './user-create/user-login.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { UserService } from './user.service';
import { Injector } from './data/constants.injectables';
import { LogOutComponent } from './user-create/log-out.component';


@NgModule({
  declarations: [
    UserComponent,
    UserCreateComponent,
    UserLoginComponent,
    UserDetailComponent,
    LogOutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserService,
    Injector,
  ]
})
export class UserModule { }
