import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobilePhonesStoreRoutingModule } from './mobile-phones-store-routing.module';
import { MobilePhonesStoreComponent } from './mobile-phones-store.component';
import { PhonesFilterComponent } from './components/phones-filter.component';
import { PhoneLeftComponent } from './components/phone-left.component';
import { PhoneCenterComponent } from './components/phone-center.component';
import { PhoneComponent } from './phone/phone.component';
import { PhoneService } from './services/phone.service';
import { Injector } from '../user/data/constants.injectables';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MobilePhonesStoreComponent,
    PhonesFilterComponent,
    PhoneLeftComponent,
    PhoneCenterComponent,
    PhoneComponent,
  ],
  imports: [
    CommonModule,
    MobilePhonesStoreRoutingModule,
    HttpClientModule
  ],
  providers: [
    PhoneService,
    Injector
  ]
})
export class MobilePhonesStoreModule { }
