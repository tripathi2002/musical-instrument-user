import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { HeaderTopComponent } from './header/header-top/header-top.component';
import { HeaderBottomComponent } from './header/header-bottom/header-bottom.component';
import { HeaderMiddleComponent } from './header/header-middle/header-middle.component';

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { DialogModule } from '@angular/cdk/dialog';
import { SharedService } from './data/services/shared.service';
import { ActionComponent } from './data/action.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    HeaderTopComponent,
    HeaderBottomComponent,
    HeaderMiddleComponent,
    ActionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    CdkMenuModule,
    BrowserAnimationsModule,
    DialogModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
