import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { UserRoutingModule } from './user-routing.module';

import { UserCreateComponent } from './components/user-create.component';
import { UserLoginComponent } from './components/user-login.component';
import { UserDetailComponent } from './components/user-detail.component';

import { UserService } from './services/user.service';
import { Injector } from './data/constants.injectables';
import { LogoutComponent } from './components/logout.component';
import { DialogModule } from '@angular/cdk/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    UserCreateComponent,
    UserLoginComponent,
    UserDetailComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DialogModule,
    // BrowserAnimationsModule
  ],
  providers: [
    UserService,
    Injector,
  ]
})
export class UserModule { }
